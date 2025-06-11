import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserInfo {
  uid: string;
  email: string;
  fullName: string;
}

interface AuthState {
  user: UserInfo | null;
  claims: {
    role?: string;
    subRole?: string;
    farmId?: string;
  };
  loading: boolean;
  fetchSession: () => Promise<void>;
  signOut: () => Promise<void>;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      claims: {},
      loading: true,

      fetchSession: async () => {
        set({ loading: true });
        try {
          const res = await fetch('/api/auth/me');
          if (res.ok) {
            const data = await res.json();
            set({
              user: {
                uid: data.uid,
                email: data.email,
                fullName: data.fullName,
              },
              claims: {
                role: data.role,
                subRole: data.subRole,
                farmId: data.farmId,
              },
            });
          } else {
            set({ user: null, claims: {} });
          }
        } catch {
          set({ user: null, claims: {} });
        } finally {
          set({ loading: false });
        }
      },

      signOut: async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        set({ user: null, claims: {} });
        localStorage.removeItem('auth-storage'); // optional: clear persisted store
        window.location.href = '/auth/login';
      },

      reset: () => {
        set({ user: null, claims: {}, loading: false });
        localStorage.removeItem('auth-storage');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
