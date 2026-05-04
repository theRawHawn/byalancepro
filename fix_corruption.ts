
import fs from 'fs';

const filePath = 'src/context/LanguageContext.tsx';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

// We want to replace line 677 (1-indexed, so index 676) with '  },'
// and remove everything until kn: { at index 915 (1-indexed 916)

const startLineIdx = 676; // Line 677
const endLineIdx = 914; // Line 915 (inclusive)

const newLines = [
  ...lines.slice(0, startLineIdx),
  '  },',
  ...lines.slice(endLineIdx + 1)
];

fs.writeFileSync(filePath, newLines.join('\n'));
console.log('File corruption fixed successfully.');
