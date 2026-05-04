import fs from 'fs';

const content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf-8');

// Rough parsing of the translations object
const lines = content.split('\n');
let translationsStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const translations: Translations = {')) {
    translationsStart = i;
    break;
  }
}

if (translationsStart === -1) {
  console.error("Could not find translations object");
  process.exit(1);
}

// Extract the translations block
let braceCount = 0;
let translationsEnd = -1;
for (let i = translationsStart; i < lines.length; i++) {
  if (lines[i].includes('{')) braceCount += (lines[i].match(/\{/g) || []).length;
  if (lines[i].includes('}')) braceCount -= (lines[i].match(/\}/g) || []).length;
  if (braceCount === 0 && i > translationsStart) {
    translationsEnd = i;
    break;
  }
}

const translationsBlock = lines.slice(translationsStart + 1, translationsEnd).join('\n');

// Find language sections
const langs = ['en', 'hi', 'kn', 'te', 'mr', 'ta'];
const langData = {};

langs.forEach(lang => {
  const langMatch = translationsBlock.match(new RegExp(`${lang}: \\{`));
  if (langMatch) {
    let startIdx = langMatch.index;
    let braceCount = 0;
    let endIdx = -1;
    for (let i = startIdx; i < translationsBlock.length; i++) {
        if (translationsBlock[i] === '{') braceCount++;
        if (translationsBlock[i] === '}') braceCount--;
        if (braceCount === 0 && i > startIdx) {
            endIdx = i;
            break;
        }
    }
    const langContent = translationsBlock.substring(startIdx, endIdx + 1);
    
    // Find keys at first level
    const keys = [];
    const firstLevelKeysMatch = langContent.matchAll(/^\s{4}([a-zA-Z]+): \{/gm);
    for (const match of firstLevelKeysMatch) {
      keys.push(match[1]);
    }
    langData[lang] = keys;
  }
});

console.log(JSON.stringify(langData, null, 2));
