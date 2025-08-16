"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const RegistrationForm = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [farmName, setFarmName] = useState("");
  const [farmAddress, setFarmAddress] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const [timer, setTimer] = useState(40);
  const [canResend, setCanResend] = useState(false);

  // Countdown logic
  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (step === 2 && timer > 0) {
      countdown = setTimeout(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(countdown);
  }, [step, timer]);

  // Handle Next → send OTP
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with backend call to send OTP
    console.log("Sending OTP to", phoneNumber);
    setStep(2);
    setTimer(40);
    setCanResend(false);
  };

  // Handle OTP input with auto move
  const handleOtpChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace auto-focus previous
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Resend OTP
  const handleResend = () => {
    // TODO: Replace with backend resend OTP
    console.log("Resending OTP to", phoneNumber);
    setOtp(Array(6).fill(""));
    setTimer(40);
    setCanResend(false);
    inputRefs.current[0]?.focus();
  };

  // Verify OTP
  const handleVerify = () => {
    const enteredOtp = otp.join("");
    console.log("Verifying OTP:", enteredOtp);
    // TODO: Replace with backend OTP verification
    if (enteredOtp.length === 6) {
      router.push("/regsteptwo");
    } else {
      alert("Please enter complete OTP");
    }
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto min-h-screen px-4 py-8 bg-white">
      {/* Logo */}
      <div>
        <Image
          src="/images/onboarding/Logo 1.jpg"
          width={140}
          height={140}
          alt="FAMTECH Logo"
        />
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <>
          <h3 className="text-xl font-bold mb-1 self-start">Register Your Account</h3>
          <p className="text-gray-500 text-sm self-start mb-4">Step 1 of 2</p>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-green-600 w-1/3" />
          </div>

          <form onSubmit={handleNext} className="w-full space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="09012345678"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Farm Name</label>
              <input
                type="text"
                value={farmName}
                onChange={(e) => setFarmName(e.target.value)}
                placeholder="Under Bridge Farm"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Farm Address or Delivery Location</label>
              <input
                type="text"
                value={farmAddress}
                onChange={(e) => setFarmAddress(e.target.value)}
                placeholder="Under Bridge, Lagos"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-full"
            >
              Next <FaArrowRight />
            </button>
          </form>
        </>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="bg-white w-full max-w-sm text-center">
          <h4 className="font-bold mb-2">Verify Phone Number</h4>
          <p className="text-sm text-gray-500 mb-4">
            Enter the 6-digit code sent to <strong>{phoneNumber}</strong>
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-between gap-2 mb-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                ref={(el) => { inputRefs.current[idx] = el!; }}
                className="w-10 h-12 text-center border border-gray-300 rounded-lg text-xl focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          {/* Countdown */}
          {!canResend ? (
            <div className="text-sm text-gray-500 mb-4">
              🔄 Resend in <span className="font-medium">{timer}s</span>
            </div>
          ) : (
            <button onClick={handleResend} className="text-green-600 text-sm font-medium mb-4">
              Resend OTP
            </button>
          )}

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-full"
          >
            Verify
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
