import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = ['casestudies', 'services', 'testimonials'];
const publicDir = path.join(process.cwd(), 'public');

async function processImages() {
  for (const dir of dirs) {
    const fullPath = path.join(publicDir, dir);
    if (!fs.existsSync(fullPath)) continue;
    
    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const input = path.join(fullPath, file);
        const name = path.parse(file).name;
        const output = path.join(fullPath, `${name}.webp`);
        
        // Testimonials (avatars) resize smaller
        const width = dir === 'testimonials' ? 200 : 800;

        try {
          await sharp(input)
            .webp({ quality: 80 })
            .resize({ width: width, withoutEnlargement: true })
            .toFile(output);
            
          console.log(`Converted ${file} to webp, deleted original.`);
          fs.unlinkSync(input);
        } catch (err) {
          console.error(`Skipped ${file}: ${err.message}`);
        }
      }
    }
  }
}

processImages().then(() => console.log('Done optimizing images!'));
