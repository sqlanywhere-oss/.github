// Regenerates assets/social-preview.png (1280x640, GitHub's recommended social preview size)
// and assets/sqlanywhere-oss-mark.png (1024x1024, for the organization avatar).
//   cd tools/banner && npm install && npx playwright install chromium && npm run banner
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = path.resolve(here, '../../assets');
const browser = await chromium.launch();

const banner = await browser.newPage({ viewport: { width: 1280, height: 640 } });
await banner.goto(pathToFileURL(path.join(here, 'banner.html')).href);
await banner.evaluate(() => document.fonts.ready);
await banner.screenshot({ path: path.join(assets, 'social-preview.png') });
console.log('wrote assets/social-preview.png');

const mark = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await mark.goto(pathToFileURL(path.join(assets, 'sqlanywhere-oss-mark.svg')).href);
await mark.screenshot({ path: path.join(assets, 'sqlanywhere-oss-mark.png'), omitBackground: true });
console.log('wrote assets/sqlanywhere-oss-mark.png');

await browser.close();
