"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const API_URL = "https://api-famtech-backend-app.onrender.com";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await fetch(`${API_URL}/auth/verify-email?token=${token}`);
        if (res.ok) {
          setStatus("success");
          setShowModal(true); // Show modal after success
          setTimeout(() => {
            setShowModal(false);
            router.push("/farm/farmID"); // Redirect after modal disappears
          }, 3000);
        } else {
          setStatus("error");
        }
      } catch (err) {
        setStatus("error");
      }
    };

    verifyEmail();
  }, [router, searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {status === "loading" && <p className="text-gray-600">Verifying your email...</p>}
      {status === "error" && (
        <p className="text-red-500">Verification failed. Please try again.</p>
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
  );
}
