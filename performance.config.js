// إعدادات تحسين الأداء
module.exports = {
  // تحسين الذاكرة
  nodeOptions: '--max-old-space-size=4096',
  
  // تحسين التطوير
  devOptions: {
    turbo: true,
    port: 3000,
    hostname: 'localhost'
  },
  
  // تحسين البناء
  buildOptions: {
    minify: true,
    sourcemap: false,
    treeshake: true
  }
};

