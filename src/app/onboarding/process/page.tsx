import React from 'react'
import Container from '@/components/onboarding/Container';
import Role from '@/components/onboarding/Role';
import RegistrationForm from '@/components/onboarding/RegistrationForm';    
import RegStepTwo from '@/components/onboarding/RegStepTwo';
import RegistrationThree from '@/components/onboarding/RegistrationThree';
import Success from '@/components/onboarding/Success';
const page = () => {
  return (
    <div>
        <Container/>
         <Role/> 
        <RegistrationForm/>
         <RegStepTwo/> 
         <RegistrationThree/> 
         <Success /> 
    </div>
  )
}

export default page