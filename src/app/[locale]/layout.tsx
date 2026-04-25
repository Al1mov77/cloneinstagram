import { hasLocale, NextIntlClientProvider } from "next-intl";
import "../../globals.css";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import Providers from "@/src/components/ProvidersUi";
import Sidebar from "@/src/components/navBar/SidebarUi";
import { ThemeProvider } from "@/src/components/theme-provider";

import MobileNav from "@/src/components/navBar/MobileNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Entertainment Lite",
    template: "%s | Entertainment Lite",
  },
  description: "Entertainment Lite - The fastest and most lightweight social media platform. Connect with friends, share photos, and explore new content.",
  keywords: ["entertainment lite", "social media", "instagram clone", "lightweight", "fast social network", "connect friends"],
  authors: [{ name: "Entertainment Lite Team" }],
  openGraph: {
    title: "Entertainment Lite",
    description: "Connect with friends and share your best moments on Entertainment Lite.",
    type: "website",
    siteName: "Entertainment Lite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entertainment Lite",
    description: "The fastest social media experience.",
  },
  alternates: {
    canonical: "https://entertainment-lite.vercel.app",
    languages: {
      "en-US": "https://entertainment-lite.vercel.app/en",
      "ru-RU": "https://entertainment-lite.vercel.app/ru",
      "tg-TJ": "https://entertainment-lite.vercel.app/tj",
    },
  },
  robots: "index, follow",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Check if user is logged in to decide whether to show the sidebar
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("auth_token");

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <NextIntlClientProvider locale={locale}>
              <div className="flex min-h-screen">
                {/* Sidebar: Only visible if logged in */}
                {isLoggedIn && (
                  <div className="hidden lg:block">
                    <Sidebar />
                  </div>
                )}

                {/* Main Content Area: Margin only if sidebar is present */}
                <main
                  className={`flex-1 transition-all duration-300 ${isLoggedIn ? "lg:ml-[72px]" : ""}`}
                >
                  <div
                    className={
                      isLoggedIn
                        ? "max-w-[975px] mx-auto pt-8 px-4 sm:px-8"
                        : "w-full min-h-screen"
                    }
                  >
                    {children}
                  </div>
                </main>

                {/* Mobile Bottom Nav: Only show if logged in */}
                {isLoggedIn && <MobileNav />}
              </div>
            </NextIntlClientProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
