import RegisterUi from "@/src/components/Auth/RegisterUi";
import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Join Now",
    description: "Create an account on Entertainment Lite and start sharing your moments with the world.",
    alternates: {
      canonical: `https://entertainment-lite.vercel.app/${locale}/register`,
    },
  };
}

const Register = () => {
  return <RegisterUi />;
};

export default Register;
