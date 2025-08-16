"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

const API_URL = "https://api-famtech-backend-app.onrender.com";

interface SignupFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
  region: string;
  language: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormInputs>();

  const onSubmit = async (data: SignupFormInputs) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          region: data.region,
          language: data.language,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Signup failed");
      }

      toast.success("Signup successful! Check your email to verify.");
      router.push("/onboarding/verify-email");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="h-24 w-24 lg:h-28 lg:w-28 flex justify-center mx-auto mt-6">
                  <Image
                    src="/images/onboarding/Logo 1.jpg"
                    width={700}
                    height={700}
                    alt="logo"
                    className="rounded-full"
                  />
                </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border-gray-600 border rounded-xl focus:outline-none focus:ring-1 focus:ring-green-300"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className="w-full p-3 border-gray-600 border rounded-xl pr-10 focus:outline-none focus:ring-1 focus:ring-green-300"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: "Please confirm your password" })}
              className="w-full p-3 border-gray-600 border rounded-xl pr-10 focus:outline-none focus:ring-1 focus:ring-green-300"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          {/* Region */}
          <div>
            <input
              type="text"
              placeholder="Region"
              {...register("region", { required: "Region is required" })}
              className="w-full p-3 border-gray-600 border rounded-xl focus:outline-none focus:ring-1 focus:ring-green-300"
            />
            {errors.region && <p className="text-red-600 text-sm">{errors.region.message}</p>}
          </div>

          {/* Language */}
          <div>
            <select
              {...register("language", { required: "Language is required" })}
              className="w-full p-3 border-gray-600 border rounded-xl focus:outline-none focus:ring-1 focus:ring-green-300"
            >
              <option value="">Select Language</option>
              <option value="en">English</option>
              <option value="yo">Yoruba</option>
              <option value="ha">Hausa</option>
              <option value="ig">Igbo</option>
              <option value="pcm">Pidgin</option>
            </select>
            {errors.language && <p className="text-red-600 text-sm">{errors.language.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/onboarding/login" className="text-green-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
