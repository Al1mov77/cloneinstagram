import RegisterUi from "@/src/components/Auth/RegisterUi";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Now",
  description: "Create an account on Entertainment Lite and start sharing your moments with the world.",
};

const Register = () => {
  return <RegisterUi />;
};

export default Register;
