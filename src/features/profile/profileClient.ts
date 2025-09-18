// src/features/profile/profileClient.ts
import apiClient from "@/lib/apiClient";
import axios from "axios";
import { ProfileResponse } from "@/types";


export const getProfile = async (
  token: string
): Promise<ProfileResponse | null> => {
  try {
    const { data } = await apiClient.get<ProfileResponse>("/api/get-profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw new Error("Failed to fetch profile");
  }
};
