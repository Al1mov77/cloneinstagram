import ProfileUi from "@/src/components/ProfileUi/profileUi";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile | Instagram Clone",
  description: "Manage your profile, view your posts, and see your saved content.",
};

const Profile = () => {
  return <ProfileUi />;
};

export default Profile;
