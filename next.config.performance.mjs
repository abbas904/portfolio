/** @type {import('next').NextConfig} */
const nextConfig = {
  // تحسين الأداء المتقدم
  experimental: {
    optimizePackageImports: [
      'react-icons', 
      'framer-motion', 
      'swiper',
      '@radix-ui/react-dialog',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-slot',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip'
    ],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    // تحسين التطوير
    webpackBuildWorker: true,
    // تحسين الذاكرة
    memoryBasedWorkersCount: true,
  },
  
  // تحسين البناء
  swcMinify: true,
  
  // تحسين الصور
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
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
  
  // تحسين Webpack
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // تحسين التطوير
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    // تحسين الاستيرادات
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };
    
    return config;
  },
};

export default nextConfig;


