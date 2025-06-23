import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';


interface RegistrationData {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  farmName: string;
  farmType: string;
  farmSize: number;
  farmSizeUnit: string;
  establishedYear: number;
  description?: string;
  country: string;
  state: string;
  city: string;
  address: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
  currency: string;
  timezone: string;
  primaryCrops: string[];
  farmingMethods: string[];
  seasonalPattern: string;
}

async function subscribeToMailerlite(email: string, firstName: string, lastName: string) {
  console.log('MailerLite key:', process.env.MAILERLITE_API_KEY?.slice(0, 5)); // Masked for safety
  console.log('Group ID:', process.env.MAILERLITE_GROUP_ID);

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
    },
    body: JSON.stringify({
      email,
      fields: { name: firstName, last_name: lastName },
      groups: [process.env.MAILERLITE_GROUP_ID]
    })
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || `MailerLite error ${res.status}`);
    
  }
  return data.data;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    /** Validate input (only key fields shown) **/
    const required = ['uid','firstName','lastName','email','phoneNumber','farmName','farmType','farmSize','state','city','address'];
    for (const f of required) {
      const v = (data as any)[f];
      if (!v || (typeof v === 'string' && !v.trim())) {
        return NextResponse.json({ error: `${f} is required` }, { status: 400 });
      }
    }
    if (!Array.isArray(data.primaryCrops) || data.primaryCrops.length === 0) {
      return NextResponse.json({ error: 'At least one primary crop is required' }, { status: 400 });
    }

    const batch = adminDb.batch();
    const farmId = `farm_${data.uid}`;
    const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`;

    await adminAuth.setCustomUserClaims(data.uid, {
      role: 'farmer',
      subRole: 'admin',
      farmId
    });

    const userRef = adminDb.collection('users').doc(data.uid);
    batch.set(userRef, {
      uid: data.uid,
      personalInfo: {
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        fullName,
        email: data.email.toLowerCase().trim(),
        phoneNumber: data.phoneNumber.trim()
      },
      farmInfo: {
        farmId,
        farmName: data.farmName.trim(),
        role: 'owner',
        permissions: ['all']
      },
      profile: {
        avatar: null,
        bio: data.description?.trim() || '',
        joinedDate: FieldValue.serverTimestamp(),
        lastActive: FieldValue.serverTimestamp()
      },
      preferences: {
        currency: data.currency,
        timezone: data.timezone,
        language: 'en',
        notifications: {
          email: true,
          sms: false,
          push: true,
          weatherAlerts: true,
          marketPrices: true,
          reminders: true
        }
      },
      role: 'farmer',
      subRole: 'admin',
      isActive: true,
      emailVerified: false,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });

    const farmRef = adminDb.collection('farms').doc(farmId);
    batch.set(farmRef, {
      id: farmId,
      basicInfo: {
        name: data.farmName.trim(),
        type: data.farmType,
        description: data.description?.trim() || '',
        establishedYear: data.establishedYear,
        size: {
          value: +data.farmSize,
          unit: data.farmSizeUnit
        }
      },
      location: {
        country: data.country,
        state: data.state,
        city: data.city.trim(),
        address: data.address.trim(),
        coordinates: (data.coordinates?.lat && data.coordinates?.lng)
          ? { latitude: +data.coordinates.lat, longitude: +data.coordinates.lng }
          : null,
        timezone: data.timezone
      },
      ownership: {
        ownerId: data.uid,
        ownerName: fullName,
        ownerEmail: data.email.toLowerCase().trim(),
        ownerPhone: data.phoneNumber.trim()
      },
      team: {
        members: [{
          uid: data.uid,
          name: fullName,
          email: data.email.toLowerCase().trim(),
          role: 'admin',
          permissions: ['all'],
          joinedAt: Timestamp.now(),
          isActive: true
        }],
        totalMembers: 1,
        roles: { admins: [data.uid], staff: [], finance: [] }
      },
      production: {
        primaryCrops: data.primaryCrops,
        farmingMethods: data.farmingMethods,
        seasonalPattern: data.seasonalPattern,
        currentSeasons: [],
        totalHarvests: 0,
        averageYield: 0
      },
      financial: {
        currency: data.currency,
        totalRevenue: 0,
        totalExpenses: 0,
        profitMargin: 0,
        budgetCategories: [
          'Seeds & Seedlings', 'Fertilizers', 'Pesticides',
          'Equipment', 'Labor', 'Utilities', 'Transportation',
          'Storage', 'Marketing', 'Other'
        ]
      },
      subscription: {
        plan: 'free',
        status: 'active',
        startDate: FieldValue.serverTimestamp(),
        features: {
          maxUsers: 3,
          maxFields: 5,
          storageGB: 1,
          analyticsHistory: 30,
          supportLevel: 'basic'
        }
      },
      settings: {
        weatherAlerts: true,
        marketPriceAlerts: true,
        automaticReports: false,
        dataSharing: false,
        publicProfile: false
      },
      status: {
        isActive: true,
        verified: false,
        setupCompleted: false
      },
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });

    batch.set(adminDb.collection('farmAnalytics').doc(farmId), {
      farmId,
      overview: { totalRevenue: 0, totalExpenses: 0, netProfit: 0, profitMargin: 0, roi: 0 },
      production: { totalFields: 0, activeSeasons: 0, totalHarvests: 0, averageYield: 0, bestPerformingCrop: null, worstPerformingCrop: null },
      inventory: { totalItems: 0, lowStockItems: 0, expiringSoon: 0, totalValue: 0 },
      team: { totalMembers: 1, activeMembers: 1, taskCompletionRate: 0, averageProductivity: 0 },
      monthly: { revenue: Array(12).fill(0), expenses: Array(12).fill(0), profit: Array(12).fill(0) },
      trends: { revenueGrowth: 0, expenseGrowth: 0, profitGrowth: 0, yieldImprovement: 0 },
      goals: { annualRevenue: 0, yieldTargets: {}, costReduction: 0, sustainability: { waterUsageReduction: 0, organicTransition: 0, carbonFootprint: 0 } },
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });

    [
      { name: 'Seeds & Seedlings', type: 'input', icon: '🌱' },
      { name: 'Fertilizers', type: 'input', icon: '🧪' },
      { name: 'Pesticides', type: 'input', icon: '🔬' },
      { name: 'Tools & Equipment', type: 'asset', icon: '🛠️' },
      { name: 'Harvested Crops', type: 'output', icon: '🌾' },
      { name: 'Processed Products', type: 'output', icon: '📦' }
    ].forEach((c,i) => {
      batch.set(adminDb.collection('inventoryCategories').doc(), {
        ...c, farmId, isDefault: true, isActive: true, order: i, createdAt: FieldValue.serverTimestamp()
      });
    });

    batch.set(adminDb.collection('farmSetupChecklists').doc(farmId), {
      farmId,
      items: [
        { id: 'profile_complete', title: 'Complete Farm Profile', completed: false, category: 'setup' },
        { id: 'first_field',    title: 'Add Your First Field', completed: false, category: 'fields' },
        { id: 'team_invite',    title: 'Invite Team Members', completed: false, category: 'team' },
        { id: 'first_season',   title: 'Plan Your First Season', completed: false, category: 'planning' },
        { id: 'inventory_setup',title: 'Set Up Inventory', completed: false, category: 'inventory' }
      ],
      completedCount: 0, totalCount: 5, progressPercentage: 0,
      createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp()
    });

    // ** Subscribe to newsletter **
    await subscribeToMailerlite(data.email, data.firstName, data.lastName);

    // ** Commit all writes **
    await batch.commit();

    console.log('Full registration + MailerLite subscription succeeded for', data.uid);
    return NextResponse.json({ message: 'Farm, user, and newsletter registration successful' }, { status: 201 });
  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json({
      error: 'Registration failed',
      details: err instanceof Error ? err.message : String(err)
    }, { status: 500 });
  }
}
