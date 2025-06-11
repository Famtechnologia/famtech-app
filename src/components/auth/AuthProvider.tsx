'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Grab fetchSession from the store
  const fetchSession = useAuthStore((state) => state.fetchSession);

  useEffect(() => {
    fetchSession(); // fetch session on app load
  }, [fetchSession]);

  return <>{children}</>;
}
