import { adminAuth } from '@/lib/firebase/admin';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = (await cookies()).get('session')?.value;

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = await adminAuth.verifySessionCookie(session, true);
    const user = await adminAuth.getUser(decoded.uid);
    const { role, subRole, farmId } = user.customClaims || {};

    return NextResponse.json({
      uid: user.uid,
      email: user.email,
      role,
      subRole,
      farmId,
    });
  } catch {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
  }
}
