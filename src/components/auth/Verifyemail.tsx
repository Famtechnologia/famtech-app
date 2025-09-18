// src/app/auth/verify-email/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const API_URL = "https://api-famtech-backend-app.onrender.com";

export default function VerifyEmailPage() {
  const [verificationStatus, setVerificationStatus] = useState("verifying");
  const [message, setMessage] = useState("Verifying your email address...");
  const [showModal, setShowModal] = useState(false); // New state for modal visibility
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setVerificationStatus("error");
      setMessage("No verification token found.");
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `${API_URL}/auth/verify-email?token=${token}`
        );
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus("success");
          setMessage(data.message || "Email verified successfully!");
          setShowModal(true); // Show the modal on success

          // Optional: Redirect to login after a delay
          setTimeout(() => {
            router.push("/auth/login");
          }, 3000);
        } else {
          setVerificationStatus("error");
          setMessage(data.message || "Verification failed. Please try again.");
        }
      } catch (err) {
        setVerificationStatus("error");
        setMessage("An error occurred during verification.");
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        {/* Loading and Error States */}
        {verificationStatus === "verifying" && (
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p className="text-lg text-gray-700">{message}</p>
          </div>
        )}
        {verificationStatus === "error" && (
          <div className="text-red-600">
            <FaExclamationCircle size={48} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Failed!</h2>
            <p className="text-lg">{message}</p>
            <p className="mt-4">
              <Link href="/auth/register-page" className="text-red-600 underline">
                Try again
              </Link>
            </p>
          </div>
        )}

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md text-center">
              <h2 className="text-lg font-semibold text-green-600 mb-2">Email Verified 🎉</h2>
              <p className="text-gray-700">
                A verification email has been sent to your account.
                <br />
                Please click the link to verify your account.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}