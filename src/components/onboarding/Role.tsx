'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaTractor, FaShoppingCart, FaStore, FaUserTie } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Role = () => {
  const roles = [
    {
      id: "farmer",
      title: "Farmer",
      description: "Sell your produce directly to buyers and access farming resources",
      icon: <FaTractor className="text-green-600 text-2xl" />,
    },
    {
      id: "buyer",
      title: "Buyer",
      description: "Purchase fresh produce directly from farmers",
      icon: <FaShoppingCart className="text-blue-600 text-2xl" />,
    },
    {
      id: "retail-seller",
      title: "Retail Seller",
      description: "Sell seeds, tools, fertilizers and other farming inputs",
      icon: <FaStore className="text-orange-600 text-2xl" />,
    },
    {
      id: "farm-consultant",
      title: "Farm Consultant",
      description: "Provide agricultural expertise and support to farmers",
      icon: <FaUserTie className="text-purple-600 text-2xl" />,
    },
  ];

  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();

  const handleContinue = async () => {
    if (!selectedRole) return;

    try {
      // Dummy API POST (replace URL when backend is ready)
      await fetch("/api/save-role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: selectedRole }),
      });
    } catch (error) {
      console.error("Failed to save role:", error);
    }

    // Navigate to registration page
    router.push("/registration");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-white">
      {/* Logo */}
      <div className="mt-8">
        <Image
          src="/images/onboarding/Logo 1.jpg"
          width={120}
          height={120}
          alt="logo"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-2">Choose Your Role</h3>
      <p className="text-gray-500 mb-6 text-center">
        Select the option that best describes you
      </p>

      {/* Role List */}
      <div className="flex flex-col gap-5 w-full max-w-md">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelectedRole(role.id)}
            className={`flex items-center justify-between border rounded-lg px-4 py-3 transition text-left ${
              selectedRole === role.id
                ? "bg-green-50 border-green-500"
                : "border-gray-300 hover:border-green-500"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-2">{role.icon}</div>
              <div>
                <p className="font-medium">{role.title}</p>
                <p className="text-sm text-gray-500">{role.description}</p>
              </div>
            </div>
            {selectedRole === role.id && (
              <FaCheckCircle className="text-green-500 text-xl" />
            )}
          </button>
        ))}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedRole}
        className={`mt-8 w-full max-w-sm py-3 rounded-full text-white font-medium transition ${
          selectedRole
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default Role;
