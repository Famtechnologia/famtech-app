// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin';

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY!;
const SESSION_EXPIRES_IN_MS = 60 * 60 * 24 * 5 * 1000; // 5 days

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const loginRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, returnSecureToken: true })
      }
    );

    const loginData = await loginRes.json();
    if (!loginRes.ok) {
      const message = loginData.error?.message || 'Login failed';
      return NextResponse.json({ error: message }, { status: 401 });
    }

    const { idToken, localId: uid } = loginData;

    // Create session cookie
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: SESSION_EXPIRES_IN_MS
    });

    // Read user claims
    const user = await adminAuth.getUser(uid);
    const { role, subRole, farmId } = user.customClaims || {};

    // Set secure cookie
    const response = NextResponse.json({
      success: true,
      uid,
      role,
      subRole,
      farmId,
      redirectTo: `/farm/${farmId || 'dashboard'}`
    });

    response.cookies.set('session', sessionCookie, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: SESSION_EXPIRES_IN_MS / 1000,
      path: '/'
    });

    return response;
  } catch (err: any) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Unexpected error during login.' }, { status: 500 });
  }
}
