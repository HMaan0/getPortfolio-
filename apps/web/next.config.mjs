/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "static.wikia.nocookie.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
