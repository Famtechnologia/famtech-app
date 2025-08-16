'use client';
import React from 'react'
import SignUp from '@/components/onboarding/Signup'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

  


const page:React.FC = () => {

  const router = useRouter();
  return (
    <div>
    <SignUp  />
    </div>
  )
}

export default page