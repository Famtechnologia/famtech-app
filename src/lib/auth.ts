// lib/auth.ts
export async function fetchSession() {
    const res = await fetch('/api/auth/me', {
      cache: 'no-store', // ensure fresh data every time
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch session');
    }
  
    return res.json();
  }
  