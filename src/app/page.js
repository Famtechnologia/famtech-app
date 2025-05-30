'use client';
import { useEffect } from 'react';
import { useAuth } from '../lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sprout, BarChart, Cloud, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const { user, claims, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && claims) {
      // Redirect authenticated users to their dashboard
      if (claims.role === 'superadmin') {
        router.push('/dashboard/superadmin');
      } else if (claims.role === 'farmer') {
        if (claims.subRole === 'admin') {
          router.push('/dashboard/farmer/admin');
        } else if (claims.subRole === 'staff') {
          router.push('/dashboard/farmer/staff');
        } else if (claims.subRole === 'finance') {
          router.push('/dashboard/farmer/finance');
        }
      }
    }
  }, [user, claims, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sprout className="text-green-600 mr-2" size={32} />
              <span className="text-2xl font-bold text-gray-900">Famtech</span>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/auth/login"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/register"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing Agriculture with
            <span className="text-green-600 block">Smart Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Monitor your crops, manage your farm, and maximize your yield with our comprehensive 
            agricultural management platform powered by AI and IoT technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/register"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              href="#features"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Your Farm
          </h2>
          <p className="text-xl text-gray-600">
            From crop monitoring to financial tracking, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <Cloud className="text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Monitoring</h3>
            <p className="text-gray-600">
              Real-time weather data and forecasts to help you make informed decisions
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <Sprout className="text-green-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Crop Management</h3>
            <p className="text-gray-600">
              Track plant health, growth stages, and receive alerts for potential issues
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <BarChart className="text-purple-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Analytics</h3>
            <p className="text-gray-600">
              Monitor expenses, revenue, and profitability with detailed financial reports
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <Users className="text-orange-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Management</h3>
            <p className="text-gray-600">
              Assign tasks, track progress, and coordinate your farm operations
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Increase Your Farm's Productivity
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Data-Driven Decisions</h4>
                    <p className="text-gray-600">Make informed choices based on real-time data and analytics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduced Costs</h4>
                    <p className="text-gray-600">Optimize resource usage and reduce operational expenses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Improved Yields</h4>
                    <p className="text-gray-600">Monitor crop health and optimize growing conditions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Better Organization</h4>
                    <p className="text-gray-600">Streamline operations and improve team coordination</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">30%</div>
                  <div className="text-sm text-gray-600">Increase in Yield</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">90%</div>
                  <div className="text-sm text-gray-600">User Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers who are already using Famtech to grow better crops
          </p>
          <Link 
            href="/auth/register"
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Sprout className="text-green-500 mr-2" size={32} />
                <span className="text-2xl font-bold">Famtech</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing agriculture with smart technology solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Famtech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}