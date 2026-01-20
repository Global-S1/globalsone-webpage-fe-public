import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // // output: 'export',
  images: {
    unoptimized: true, // Required for static export on cPanel without Node.js
  }
};

export default withNextIntl(nextConfig);
