'use client';
import React from "react";
import { useRouter } from "next/navigation";

const LoginSuccess: React.FC = () => {
  const router = useRouter();

  const handleDashboardClick = () => {
    router.push("/dashboard");
  };

  const handleCompleteRegistrationClick = () => {
    router.push("/onboarding/process");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          🎉 Login Successful!
        </h1>
        <p className="text-gray-700 mb-8 text-base">
          You're in! Let's get you fully set up.
        </p>

        <div className="flex flex-col gap-4">
          {/* Primary button for registration */}
          <button
            onClick={handleCompleteRegistrationClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
          >
            Complete My Profile
          </button>

          {/* Secondary text-style button */}
          <button
            onClick={handleDashboardClick}
            className="text-green-600 hover:underline text-sm font-medium transition-colors duration-200"
          >
            Skip for now, go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;
