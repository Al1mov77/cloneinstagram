import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
