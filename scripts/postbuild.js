import { copyFileSync } from 'fs';
import { resolve } from 'path';

// Copy index.html to 404.html for GitHub Pages SPA routing
const distDir = resolve(process.cwd(), 'dist');
copyFileSync(
  resolve(distDir, 'index.html'),
  resolve(distDir, '404.html')
);

console.log('✓ Created 404.html for GitHub Pages SPA routing');

