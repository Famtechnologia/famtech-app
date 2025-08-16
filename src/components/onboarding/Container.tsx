'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Container = () => {
  const router = useRouter();

  const languages = [
    { code: "en", name: "English", flag: "https://flagcdn.com/gb.svg" },
    { code: "yo", name: "Yoruba", flag: "https://flagcdn.com/ng.svg" },
    { code: "ha", name: "Hausa", flag: "https://flagcdn.com/ng.svg" },
    { code: "ig", name: "Igbo", flag: "https://flagcdn.com/ng.svg" },
    { code: "pi", name: "Pidgin", flag: "https://flagcdn.com/ng.svg" },
  ];

  const [selectedLang, setSelectedLang] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!selectedLang) return;
    setLoading(true);

    try {
      // Temporary mock POST request
      await fetch("/api/language", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: selectedLang }),
      });

      // Navigate to registration page
      router.push("/registration");
    } catch (err) {
      console.error("Error saving language:", err);
    } finally {
      setLoading(false);
    }
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
      <h3 className="text-2xl font-bold mb-2">Choose Your Language</h3>
      <p className="text-gray-500 mb-6 text-center">
        Select your preferred language for the app
      </p>

      {/* Language List */}
      <div className="flex flex-col gap-3 w-full max-w-md">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLang(lang.code)}
            className={`flex items-center justify-between border rounded-lg px-4 py-3 transition ${
              selectedLang === lang.code
                ? "bg-green-50 border-green-500"
                : "border-gray-300 hover:border-green-500"
            }`}
          >
            <div className="flex items-center gap-3">
              <img src={lang.flag} alt={lang.name} className="w-6 h-6" />
              <span>{lang.name}</span>
            </div>
            {selectedLang === lang.code && (
              <FaCheckCircle className="text-green-500" />
            )}
          </button>
        ))}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedLang || loading}
        className={`mt-8 w-full max-w-sm py-3 rounded-full text-white font-medium transition ${
          selectedLang && !loading
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        {loading ? "Saving..." : "Continue"}
      </button>
    </div>
  );
};

export default Container;
