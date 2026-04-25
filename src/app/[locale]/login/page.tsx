import LoginUi from "@/src/components/Auth/loginUi";
import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Login",
    description: "Login to your Entertainment Lite account to connect with friends and share your moments.",
    alternates: {
      canonical: `https://entertainment-lite.vercel.app/${locale}/login`,
    },
  };
}

const Login = () => {
  return <LoginUi />;
};

export default Login;
