// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase/admin';

export async function POST(request: NextRequest) {
  try {
    const { uid, name, email, role, subRole, farmName } = await request.json();

    // Set custom claims
    await adminAuth.setCustomUserClaims(uid, { role, subRole });

    // Create user document
    const userData = {
      uid,
      name,
      email,
      role,
      subRole,
      createdAt: new Date(),
      isActive: true,
    };

    await adminDb.collection('users').doc(uid).set(userData);

    // Create farm if user is a farmer
    if (role === 'farmer') {
      const farmData = {
        id: `farm_${uid}`,
        name: farmName,
        ownerId: uid,
        members: [uid],
        location: {
          latitude: 0,
          longitude: 0,
          address: '',
          country: 'Nigeria',
          state: '',
        },
        size: 0,
        cropTypes: [],
        createdAt: new Date(),
        isActive: true,
        subscriptionPlan: 'free',
      };

      await adminDb.collection('farms').doc(`farm_${uid}`).set(farmData);
      
      // Update user with farmId
      await adminDb.collection('users').doc(uid).update({ farmId: `farm_${uid}` });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}