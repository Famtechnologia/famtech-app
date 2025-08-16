'use client';
import React, { useState } from 'react';

const ResetPassword: React.FC = () => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('https://api-famtech-backend-app.onrender.com/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          newPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
      } else {
        setError(data?.message || 'Something went wrong. Try again.');
        setStatus('idle');
      }
    } catch {
      setError('Network error. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

        {status === 'success' ? (
          <p className="text-green-600 text-sm text-center">
            Password reset successful. Please log in with your new password.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="token"
              placeholder="Enter your reset token"
              className="w-full p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring focus:ring-green-300"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              className="w-full p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring focus:ring-green-300"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              className="w-full p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring focus:ring-green-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
