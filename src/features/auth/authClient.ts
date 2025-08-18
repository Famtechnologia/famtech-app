// 2. Updated authClient.ts with register function
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api-famtech-backend-app.onrender.com';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem("token");
        const { clearUser } = useAuthStore.getState();
        clearUser();
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(error);
  }
);

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      role?: string;
      subRole?: string;
      region?: string;
      language?: string;
      isVerified?: boolean;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
}


export interface RegisterResponse {
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      role?: string;
      region?: string;
      language?: string;
      isVerified?: boolean;
    };
    tokens?: {
      accessToken: string;
      refreshToken?: string;
    };
  };
}


export interface LoginPayload {
  email: string;
  password: string;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const { data } = await apiClient.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    return data; // full response (success, message, data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Login failed";
      throw new Error(message);
    }
    throw new Error("Network error occurred");
  }
};





export interface RegisterPayload {
  email: string;
  password: string;
  region: string;
  language: string;
}


export const register = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  try {
    const { data } = await apiClient.post<RegisterResponse>("/auth/signup", payload);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Registration failed";
      throw new Error(message);
    }
    throw new Error("Network error occurred");
  }
};



export const useLogout = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.clearUser);
  const token = useAuthStore((state) => state.token);

  const handleLogout = async () => {
    try {
      if (token) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken: token }),
        });
      }
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      logout(); // clears Zustand state & token
      router.push("/auth/login");
    }
  };

  return { handleLogout };
};


