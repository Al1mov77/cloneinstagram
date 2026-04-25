import HomeClient from "./HomeClient";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Home",
    description: "Entertainment Lite - Connect with friends and share your best moments.",
    alternates: {
      canonical: `https://entertainment-lite.vercel.app/${locale}`,
    },
  };
}

export default function Page() {
  return <HomeClient />;
}
