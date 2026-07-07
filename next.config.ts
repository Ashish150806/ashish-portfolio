import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gzip/Brotli the HTML and RSC/JS payloads served by Next.
  compress: true,
  // Drop the `X-Powered-By: Next.js` header (Lighthouse best practice).
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    // Serve AVIF first (≈20% smaller than WebP) and fall back to WebP, then
    // the original. next/image negotiates via the request `Accept` header.
    formats: ["image/avif", "image/webp"],
    // Next.js 16 requires the allowed `quality` values to be enumerated.
    qualities: [70, 75],
    // Cache optimized images on disk/CDN for 31 days to cut re-optimization.
    minimumCacheTTL: 2678400,
  },

  // Only pull the modules actually used from these barrel packages so unused
  // code is tree-shaken out of the client bundles.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "@react-three/drei"],
  },

  // Long-lived, immutable caching for hashed/static assets under /public so
  // repeat visits are served from cache ("efficient cache policy" audit).
  async headers() {
    return [
      {
        source:
          "/:path*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
