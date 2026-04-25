import ProfileUi from "@/src/components/ProfileUi/profileUi";
import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "My Profile",
    description: "Manage your Entertainment Lite profile, view your posts, and see your saved content.",
    alternates: {
      canonical: `https://entertainment-lite.vercel.app/${locale}/profile`,
    },
  };
}

const Profile = () => {
  return <ProfileUi />;
};

export default Profile;
