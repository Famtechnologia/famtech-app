import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';
import { Timestamp } from "firebase-admin/firestore";

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

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json();

    const requiredFields = [
      'uid', 'firstName', 'lastName', 'email', 'phoneNumber',
      'farmName', 'farmType', 'farmSize', 'state', 'city', 'address'
    ];
    for (const field of requiredFields) {
      if (
        !data[field as keyof RegistrationData] ||
        (typeof data[field as keyof RegistrationData] === 'string' &&
          !(data[field as keyof RegistrationData] as string).trim())
      ) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    if (!data.primaryCrops || data.primaryCrops.length === 0) {
      return NextResponse.json({ error: 'At least one primary crop is required' }, { status: 400 });
    }

    const batch = adminDb.batch();
    const farmId = `farm_${data.uid}`;
    const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`;

    // Assign Firebase custom claims
    await adminAuth.setCustomUserClaims(data.uid, {
      role: 'farmer',
      subRole: 'admin',
      farmId
    });

    // User document
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

    // Farm document
    const farmRef = adminDb.collection('farms').doc(farmId);
    batch.set(farmRef, {
      id: farmId,
      basicInfo: {
        name: data.farmName.trim(),
        type: data.farmType,
        description: data.description?.trim() || '',
        establishedYear: data.establishedYear,
        size: {
          value: parseFloat(data.farmSize.toString()),
          unit: data.farmSizeUnit
        }
      },
      location: {
        country: data.country,
        state: data.state,
        city: data.city.trim(),
        address: data.address.trim(),
        coordinates: data.coordinates?.lat && data.coordinates?.lng
          ? {
              latitude: parseFloat(data.coordinates.lat),
              longitude: parseFloat(data.coordinates.lng)
            }
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
        members: [
          {
            uid: data.uid,
            name: fullName,
            email: data.email.toLowerCase().trim(),
            role: 'admin',
            permissions: ['all'],
            joinedAt: Timestamp.now(),
            isActive: true
          }
        ],
        totalMembers: 1,
        roles: {
          admins: [data.uid],
          staff: [],
          finance: []
        }
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
          'Seeds & Seedlings',
          'Fertilizers',
          'Pesticides',
          'Equipment',
          'Labor',
          'Utilities',
          'Transportation',
          'Storage',
          'Marketing',
          'Other'
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

    // Farm analytics
    const analyticsRef = adminDb.collection('farmAnalytics').doc(farmId);
    batch.set(analyticsRef, {
      farmId,
      overview: {
        totalRevenue: 0,
        totalExpenses: 0,
        netProfit: 0,
        profitMargin: 0,
        roi: 0
      },
      production: {
        totalFields: 0,
        activeSeasons: 0,
        totalHarvests: 0,
        averageYield: 0,
        bestPerformingCrop: null,
        worstPerformingCrop: null
      },
      inventory: {
        totalItems: 0,
        lowStockItems: 0,
        expiringSoon: 0,
        totalValue: 0
      },
      team: {
        totalMembers: 1,
        activeMembers: 1,
        taskCompletionRate: 0,
        averageProductivity: 0
      },
      monthly: {
        revenue: Array(12).fill(0),
        expenses: Array(12).fill(0),
        profit: Array(12).fill(0)
      },
      trends: {
        revenueGrowth: 0,
        expenseGrowth: 0,
        profitGrowth: 0,
        yieldImprovement: 0
      },
      goals: {
        annualRevenue: 0,
        yieldTargets: {},
        costReduction: 0,
        sustainability: {
          waterUsageReduction: 0,
          organicTransition: 0,
          carbonFootprint: 0
        }
      },
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });

    // Default inventory categories
    const inventoryCategories = [
      { name: 'Seeds & Seedlings', type: 'input', icon: '🌱' },
      { name: 'Fertilizers', type: 'input', icon: '🧪' },
      { name: 'Pesticides', type: 'input', icon: '🔬' },
      { name: 'Tools & Equipment', type: 'asset', icon: '🛠️' },
      { name: 'Harvested Crops', type: 'output', icon: '🌾' },
      { name: 'Processed Products', type: 'output', icon: '📦' }
    ];

    inventoryCategories.forEach((category, index) => {
      const ref = adminDb.collection('inventoryCategories').doc();
      batch.set(ref, {
        ...category,
        farmId,
        isDefault: true,
        isActive: true,
        order: index,
        createdAt: FieldValue.serverTimestamp()
      });
    });

    // Setup checklist
    const checklistRef = adminDb.collection('farmSetupChecklists').doc(farmId);
    batch.set(checklistRef, {
      farmId,
      items: [
        {
          id: 'profile_complete',
          title: 'Complete Farm Profile',
          description: 'Add farm description, photos, and detailed information',
          completed: false,
          category: 'setup'
        },
        {
          id: 'first_field',
          title: 'Add Your First Field',
          description: 'Map out your farming areas and crop zones',
          completed: false,
          category: 'fields'
        },
        {
          id: 'team_invite',
          title: 'Invite Team Members',
          description: 'Add staff, workers, or collaborators to your farm',
          completed: false,
          category: 'team'
        },
        {
          id: 'first_season',
          title: 'Plan Your First Season',
          description: 'Set up planting schedules and crop rotations',
          completed: false,
          category: 'planning'
        },
        {
          id: 'inventory_setup',
          title: 'Set Up Inventory',
          description: 'Add your seeds, tools, and supplies to track',
          completed: false,
          category: 'inventory'
        }
      ],
      completedCount: 0,
      totalCount: 5,
      progressPercentage: 0,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });

    // ✅ Commit all batched writes
    await batch.commit();

    return NextResponse.json({ message: 'Farm and user registration successful' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
