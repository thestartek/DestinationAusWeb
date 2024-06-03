/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "destinationaustralia.blob.core.windows.net",

        port: "",
        pathname: "/images/",
      },
    ],
  },
};

export default nextConfig;
