// src/app/auth/verify-email/page.jsx
import React, { Suspense } from 'react';
import VerifyEmailContent from '@/components/auth/Verifyemail';

const VerifyEmailPage = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
};

export default VerifyEmailPage;