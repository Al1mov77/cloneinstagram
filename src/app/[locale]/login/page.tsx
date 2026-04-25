import LoginUi from "@/src/components/Auth/loginUi";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Entertainment Lite account to connect with friends and share your moments.",
};

const Login = () => {
  return <LoginUi />;
};

export default Login;
