import ProfileUi from "@/src/components/ProfileUi/profileUi";
import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  
  // In a real app, you'd fetch the user data here.
  // For now, we'll use a descriptive title.
  return {
    title: `User Profile`,
    description: `View the profile of user ${id} on Entertainment Lite. Connect and share photos and videos.`,
    openGraph: {
      title: `Entertainment Lite Profile - ${id}`,
      description: `Check out ${id}'s posts and stories on Entertainment Lite.`,
    }
  };
}

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <ProfileUi userId={id} />;
};

export default UserProfile;
