import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import SidebarUi from "./components/navBar/SidebarUi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Instagram - Share and Connect",
  description: "A beautiful Instagram clone built with Next.js and Tailwind CSS. Share your photos, videos, and stories with friends.",
  keywords: ["Instagram Clone", "Social Media", "Next.js", "Tailwind CSS", "Photo Sharing"],
  authors: [{ name: "Al1mov77" }],
  openGraph: {
    title: "Instagram Clone",
    description: "Connect with friends and share your life.",
    type: "website",
    url: "https://cloneinstagram-ali.vercel.app",
    siteName: "Instagram Clone",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <main>
            <SidebarUi />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
