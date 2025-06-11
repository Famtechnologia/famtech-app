'use client';
import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/auth/layout/DashboardLayout';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { 
  Cloud, 
  Activity, 
  Users, 
  TrendingUp,
  AlertTriangle,
  Droplets,
  Thermometer,
  Wind
} from 'lucide-react';

interface DashboardStats {
  weather: {
    temperature: number;
    humidity: number;
    rainfall: number;
    windSpeed: number;
    condition: string;
  };
  crops: {
    healthyPlants: number;
    totalPlants: number;
    diseaseAlerts: number;
  };
  team: {
    totalMembers: number;
    activeToday: number;
  };
  alerts: Array<{
    id: string;
    type: 'weather' | 'crop' | 'system';
    message: string;
    severity: 'low' | 'medium' | 'high';
    timestamp: string;
  }>;
}

export default function FarmerAdminDashboard() {
  const router = useRouter();
  const { farmID: farmId } = useParams();
  console.log(farmId);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - replace with actual data fetching
    setTimeout(() => {
      setStats({
        weather: {
          temperature: 28,
          humidity: 65,
          rainfall: 12,
          windSpeed: 8,
          condition: 'Partly Cloudy'
        },
        crops: {
          healthyPlants: 850,
          totalPlants: 1000,
          diseaseAlerts: 3
        },
        team: {
          totalMembers: 8,
          activeToday: 6
        },
        alerts: [
          {
            id: '1',
            type: 'weather',
            message: 'Heavy rainfall expected tomorrow',
            severity: 'medium',
            timestamp: '2 hours ago'
          },
          {
            id: '2',
            type: 'crop',
            message: 'Potential pest infestation detected in Section B',
            severity: 'high',
            timestamp: '4 hours ago'
          },
          {
            id: '3',
            type: 'system',
            message: 'Monthly report is ready for review',
            severity: 'low',
            timestamp: '1 day ago'
          }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <DashboardLayout title="Farm Dashboard">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <ProtectedRoute requiredRole="farmer" requiredSubRole="admin">
      <DashboardLayout title="Farm Dashboard">
        <div className="space-y-6">
          {/* Weather Overview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Cloud className="mr-2" size={20} />
              Current Weather
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Thermometer className="mx-auto mb-2 text-orange-500" size={24} />
                <p className="text-2xl font-bold text-gray-900">{stats?.weather.temperature}°C</p>
                <p className="text-sm text-gray-500">Temperature</p>
              </div>
              <div className="text-center">
                <Droplets className="mx-auto mb-2 text-blue-500" size={24} />
                <p className="text-2xl font-bold text-gray-900">{stats?.weather.humidity}%</p>
                <p className="text-sm text-gray-500">Humidity</p>
              </div>
              <div className="text-center">
                <Cloud className="mx-auto mb-2 text-gray-500" size={24} />
                <p className="text-2xl font-bold text-gray-900">{stats?.weather.rainfall}mm</p>
                <p className="text-sm text-gray-500">Rainfall</p>
              </div>
              <div className="text-center">
                <Wind className="mx-auto mb-2 text-green-500" size={24} />
                <p className="text-2xl font-bold text-gray-900">{stats?.weather.windSpeed} km/h</p>
                <p className="text-sm text-gray-500">Wind Speed</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Activity className="text-green-500 mr-3" size={32} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats?.crops.healthyPlants}/{stats?.crops.totalPlants}
                  </p>
                  <p className="text-sm text-gray-500">Healthy Plants</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-green-100 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${(stats?.crops.healthyPlants! / stats?.crops.totalPlants!) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Users className="text-blue-500 mr-3" size={32} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats?.team.activeToday}/{stats?.team.totalMembers}</p>
                  <p className="text-sm text-gray-500">Active Team Members</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <AlertTriangle className="text-red-500 mr-3" size={32} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats?.crops.diseaseAlerts}</p>
                  <p className="text-sm text-gray-500">Active Alerts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
            <div className="space-y-3">
              {stats?.alerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${
                  alert.severity === 'high' ? 'border-red-500 bg-red-50' :
                  alert.severity === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                  'border-blue-500 bg-blue-50'
                }`}>
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <span className="text-xs text-gray-500">{alert.timestamp}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 capitalize">{alert.type} Alert</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}