import createNextIntlPlugin from "next-intl/plugin";
import { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram-api.softclub.tj",
        pathname: "/images/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
