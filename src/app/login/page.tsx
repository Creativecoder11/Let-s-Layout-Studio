import React from "react";
import { Metadata } from "next";
import LoginMain from "@/pages/login/login-main";

export const metadata: Metadata = {
  title: "Let's Layout Studio - Login page",
};

const LoginPage = () => {
  return (
    <LoginMain/>
  );
};

export default LoginPage;
