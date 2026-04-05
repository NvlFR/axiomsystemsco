import fs from 'fs';
import path from 'path';

const files = [
  'src/components/Testimonials.tsx',
  'src/components/CaseStudies.tsx',
  'src/components/OpenClawSection.tsx',
  'src/components/Services.tsx'
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace image extensions to .webp, except picoclaw which failed
    content = content.replace(/([a-zA-Z0-9_\-]+)\.(png|jpg|jpeg)/g, (match, name) => {
      if (name === 'picoclaw') return match;
      return `${name}.webp`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated image paths in ${file}`);
  }
}
