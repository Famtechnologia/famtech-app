// context/ProfileContext.tsx
"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useAuthStore } from "@/store/authStore"; // your auth store
import { getProfile } from "../features/profile/profileClient";       // your API function

type ProfileContextType = {
  profile: any;
  loading: boolean;
  error: string | null;
  refetchProfile: () => Promise<void>;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { token } = useAuthStore.getState(); // get token from auth store

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!token) {
        setError("No token found");
        console.log("no token");
        return;
      }

      console.log("Token found:", token);
      const profileData = await getProfile(token);
      const { data } = profileData;

      if (data?.farmProfile) {
        console.log("Profile data:", data.farmProfile);
        setProfile(data.farmProfile);
      } else {
        setError("Profile not found");
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  },);

  return (
    <ProfileContext.Provider value={{ profile, loading, error, refetchProfile: fetchProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
