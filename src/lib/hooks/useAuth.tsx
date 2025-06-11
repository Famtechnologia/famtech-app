// /lib/hooks/useAuth.ts
import { useAuthStore } from '@/store/authStore';

export function useAuth() {
  const user = useAuthStore((s) => s.user);
  const claims = useAuthStore((s) => s.claims);
  const loading = useAuthStore((s) => s.loading);
  const fetchSession = useAuthStore((s) => s.fetchSession);
  const reset = useAuthStore((s) => s.reset);

  return { user, claims, loading, fetchSession, reset };
}
