/** @type {import('next').NextConfig} */
const nextConfig = {
  // تحسين الأداء
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'swiper'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // تحسين البناء
  swcMinify: true,
  
  // تحسين الصور
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // تحسين التجميع
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // تحسين الأداء
  poweredByHeader: false,
  compress: true,
  
  // تحسين التطوير
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
