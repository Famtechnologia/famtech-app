// components/layout/DashboardLayout.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import {
  Home,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Cloud,
  Activity,
  FileText,
  Wallet
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, claims, reset } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' }); // or your actual logout endpoint
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
      reset(); // reset auth state
      router.push('/auth/login');
    }
  };

  const getNavItems = () => {
    const role = claims?.role || '';
    const subRole = claims?.subRole || '';

    if (role === 'farmer') {
      const baseItems = [
        { name: 'Dashboard', href: `/dashboard/farmer/${subRole}`, icon: Home },
        { name: 'Weather', href: `/dashboard/farmer/${subRole}/weather`, icon: Cloud },
        { name: 'Crop Health', href: `/dashboard/farmer/${subRole}/crops`, icon: Activity },
        { name: 'Reports', href: `/dashboard/farmer/${subRole}/reports`, icon: FileText },
      ];

      if (subRole === 'admin') {
        baseItems.push({ name: 'Team', href: `/dashboard/farmer/admin/team`, icon: Users });
      }

      if (subRole === 'finance' || subRole === 'admin') {
        baseItems.push({ name: 'Finances', href: `/dashboard/farmer/${subRole}/finances`, icon: Wallet });
      }

      return baseItems;
    }

    if (role === 'superadmin') {
      return [
        { name: 'Dashboard', href: '/dashboard/superadmin', icon: Home },
        { name: 'Users', href: '/dashboard/superadmin/users', icon: Users },
        { name: 'Analytics', href: '/dashboard/superadmin/analytics', icon: BarChart3 },
        { name: 'Settings', href: '/dashboard/superadmin/settings', icon: Settings },
      ];
    }

    return [];
  };

  const navItems = getNavItems();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h1 className="text-xl font-bold text-primary-600">Famtech</h1>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{user?.fullName || 'User'}</p>
              <p className="text-xs text-gray-500 capitalize">
                {claims?.role} {claims?.subRole && `- ${claims?.subRole}`}
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <LogOut size={16} className="mr-3" />
            Sign out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-4">
                <Menu size={24} />
              </button>
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="p-6">{children}</div>
        </main>
      </div>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
