'use client'

import OnboardLayout from '@/components/auth/layout/onboardLayout'
import logo from '../../../../../public/images/home/logo.png'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [formData, setFormData] = useState({
    email: "",
    password:"",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY || ''
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const result = await res.json();
      if (!res.ok) {
        toast.error(result.error || 'Login failed');
        setError(result.error);
      } else {
        toast.success(result.message);
        setSuccessMsg(result.message);
        const uid = result.uid;
        const role = result.role || 'superadmin';
        router.push(`/admin/${uid}`);
        console.log(result)
      }
    } catch (err) {
      console.error(err);
      toast.error('An unexpected error occurred.');
      setError('Unexpected error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <OnboardLayout title='Login Page'>
      <div className="flex justify-center lg:justify-end absolute items-center inset-0 transform lg:-translate-x-1/8 w-full">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <Image
            src={logo}
            width={100}
            height={100}
            alt='farm-tech-logo'
            className='my-2 mx-auto'
          />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            {successMsg && <p className="text-green-600 mb-4">{successMsg}</p>}
            <button
              type="submit"
              className="w-full bg-[#16A34A] text-white p-2 rounded-md"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </OnboardLayout>
  )
}
