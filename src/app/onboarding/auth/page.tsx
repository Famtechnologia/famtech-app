"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SignUp from "@/components/onboarding/Signup";
import Login from "@/components/onboarding/Login";

const App: React.FC = () => {
  const [screen, setScreen] = useState<"signup" | "login">("signup");
  const router = useRouter();

  return (
    <>
      {screen === "signup" && (
        <SignUp />
      )}

      {screen === "login" && (
        <Login/>
      )}
    </>
  );
};

export default App;
