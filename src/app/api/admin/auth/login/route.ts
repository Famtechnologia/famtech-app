// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY as string;
const ALLOWLIST = ['founder@domain.com', 'famtechnologia@gmail.com', 'onaneyeayodeji@gmail.com', 'onaneyeadedire@gmail.com'];
const rateLimitMap = new Map<string, { count: number; timestamp: number; banned?: boolean }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 10 * 60 * 1000;
const BAN_THRESHOLD = 10;
const BAN_DURATION = 60 * 60 * 1000;

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
  await logRef.set({ ip, reason, timestamp: FieldValue.serverTimestamp() });
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (rateLimitExceeded(ip)) {
      await logBlockedAttempt(ip, 'Rate limit or ban triggered');
      return NextResponse.json({ error: 'Too many requests or temporarily banned' }, { status: 429 });
    }

    const token = request.headers.get('x-admin-token');
    if (!token || token !== ADMIN_SECRET) {
      await logBlockedAttempt(ip, 'Invalid or missing admin token');
      return NextResponse.json({ error: 'Unauthorized request' }, { status: 401 });
    }

    const { email, password } = await request.json();
    if (!email || !password) {
      await logBlockedAttempt(ip, 'Missing email or password');
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    const trimmedEmail = email.toLowerCase().trim();
    if (!ALLOWLIST.includes(trimmedEmail)) {
      await logBlockedAttempt(ip, 'Email not allowed');
      return NextResponse.json({ error: 'Access denied for this email' }, { status: 403 });
    }

    const user = await adminAuth.getUserByEmail(trimmedEmail);
    const claims = user.customClaims || {};
    if (claims.role !== 'superadmin') {
      await logBlockedAttempt(ip, 'Not a superadmin');
      return NextResponse.json({ error: 'Unauthorized role' }, { status: 403 });
    }

    return NextResponse.json({ message: 'Login successful', uid: user.uid }, { status: 200 });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Login failed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
