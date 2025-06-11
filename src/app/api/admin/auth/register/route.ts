import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

interface SuperAdminRegistration {
  name: string;
  email: string;
  password: string;
}

const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY as string;
const ALLOWLIST = ['founder@domain.com', 'famtechnologia@gmail.com', 'onaneyeayodeji@gmail.com'];
const rateLimitMap = new Map<string, { count: number; timestamp: number; banned?: boolean }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 10 * 60 * 1000; // 10 minutes
const BAN_THRESHOLD = 10;
const BAN_DURATION = 60 * 60 * 1000; // 1 hour

function rateLimitExceeded(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (entry.banned && now - entry.timestamp < BAN_DURATION) return true;

  if (entry.banned && now - entry.timestamp >= BAN_DURATION) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  const elapsed = now - entry.timestamp;
  if (elapsed > RATE_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  const newCount = entry.count + 1;
  if (newCount >= BAN_THRESHOLD) {
    rateLimitMap.set(ip, { count: newCount, timestamp: now, banned: true });
    return true;
  }

  rateLimitMap.set(ip, { count: newCount, timestamp: entry.timestamp });
  return newCount > RATE_LIMIT;
}

async function logBlockedAttempt(ip: string, reason: string) {
  const logRef = adminDb.collection('securityLogs').doc();
  await logRef.set({
    ip,
    reason,
    timestamp: FieldValue.serverTimestamp()
  });
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (rateLimitExceeded(ip)) {
      await logBlockedAttempt(ip, 'Rate limit or ban triggered');
      return NextResponse.json({ error: 'Too many requests or temporarily banned' }, { status: 429 });
    }

    const incomingToken = request.headers.get('x-admin-token');
    if (!incomingToken || incomingToken !== ADMIN_SECRET) {
      await logBlockedAttempt(ip, 'Invalid or missing admin token');
      return NextResponse.json({ error: 'Unauthorized request' }, { status: 401 });
    }

    const data: SuperAdminRegistration = await request.json();

    const requiredFields: (keyof SuperAdminRegistration)[] = ['name', 'email', 'password'];
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === '') {
        await logBlockedAttempt(ip, `Missing field: ${field}`);
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    if (!ALLOWLIST.includes(data.email.toLowerCase().trim())) {
      await logBlockedAttempt(ip, 'Email not allowed');
      return NextResponse.json({ error: 'Access denied for this email' }, { status: 403 });
    }

    const userRecord = await adminAuth.createUser({
      displayName: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      password: data.password.trim()
    });

    await adminAuth.setCustomUserClaims(userRecord.uid, { role: 'superadmin' });

    const userRef = adminDb.collection('admin').doc(userRecord.uid);
    await userRef.set({
      uid: userRecord.uid,
      name: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      role: 'superadmin',
      isActive: true,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });

    return NextResponse.json({ message: 'Superadmin registration successful' }, { status: 201 });
  } catch (error) {
    console.error('Superadmin registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
