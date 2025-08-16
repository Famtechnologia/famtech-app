'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Login from '@/components/onboarding/Login';
const page:React.FC = () => {

  const router = useRouter();
  return (
    <div>
        
        <Login/>
    
    </div>
  )
}

export default page