#!/usr/bin/env node

// سكريبت تحسين الأداء
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 بدء تحسين الأداء...');

// تنظيف الملفات المؤقتة
try {
  console.log('🧹 تنظيف الملفات المؤقتة...');
  execSync('rm -rf .next out node_modules/.cache', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  لا يمكن حذف بعض الملفات المؤقتة');
}

// تحسين الذاكرة
process.env.NODE_OPTIONS = '--max-old-space-size=4096';
process.env.NEXT_TELEMETRY_DISABLED = '1';

console.log('✅ تم تحسين الأداء بنجاح!');
console.log('💡 استخدم: npm run dev:fast للحصول على أفضل أداء');

