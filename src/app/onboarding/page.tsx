import React from 'react'
import Welcome from './components/WelcomeScreen';
import LanguageSelection from './components/LanguageSelectionScreen';
import UserRole from './components/UserRole';
import RegistrationStepOne from './components/RegistrationStepOne';
import RegistrationStepTwo from './components/RegistrationStepTwo';
import RegistrationStepThree from './components/RegistrationStepThree'; 
import CompleteRegistrationScreen from './components/CompleteRegistrationScreen';
const page = () => {
  return (
    <div>
        <Welcome />
        <LanguageSelection />
        <UserRole/>
        <RegistrationStepOne />
        <RegistrationStepTwo />
        <RegistrationStepThree />
        <CompleteRegistrationScreen />
    </div>
  )
}

export default page