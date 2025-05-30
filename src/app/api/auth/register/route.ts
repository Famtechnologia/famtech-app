// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

export async function POST(req: NextRequest) {
  try {
    const { email, password, name, role = 'user' } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const userRecord = await adminAuth.createUser({
      email,
      password,
      displayName: name,
    });

    const uid = userRecord.uid;

    await adminAuth.setCustomUserClaims(uid, { role });

    await adminDb.collection('users').doc(uid).set({
      uid,
      email,
      name,
      role,
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ uid }, { status: 201 });

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
