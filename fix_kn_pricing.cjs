const fs = require('fs');
const path = 'src/context/LanguageContext.tsx';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

// Find the start of Kannada section
let knStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('kn: {')) {
    knStart = i;
    break;
  }
}

// Find the pricing inside kn
let pricingStart = -1;
for (let i = knStart; i < lines.length; i++) {
  if (lines[i].includes('pricing: {')) {
    pricingStart = i;
    break;
  }
}

// Find the end of pricing section in kn (before cta or the next section)
let pricingEnd = -1;
let braceCount = 0;
for (let i = pricingStart; i < lines.length; i++) {
  if (lines[i].includes('{')) braceCount += (lines[i].match(/\{/g) || []).length;
  if (lines[i].includes('}')) braceCount -= (lines[i].match(/\}/g) || []).length;
  if (braceCount === 0 && i > pricingStart) {
    pricingEnd = i;
    break;
  }
}

if (pricingStart !== -1 && pricingEnd !== -1) {
  const newPricing = `    pricing: {
      title: 'ಪಾರದರ್ಶಕ ದರಗಳು',
      description: 'ನಿಮ್ಮ ವ್ಯವಹಾರದ ಅಗತ್ಯಗಳಿಗೆ ಸರಿಹೊಂದುವ ಯೋಜನೆಯನ್ನು ಆರಿಸಿ. ಸರಳ, ಸ್ಪಷ್ಟ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ.',
      starter: 'ಸ್ಟಾರ್ಟರ್ ಪ್ಲಾನ್',
      starterPrice: '₹1,999 – ₹6,999',
      perMonth: '/ತಿಂಗಳು',
      starterFeatures: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌', 'ಬೇಸಿಕ್ ಬುಕ್ಕೀಪಿಂಗ್', 'ಸೇಲ್ಸ್ ಮತ್ತು ಪರ್ಚೇಸ್ ಎಂಟ್ರಿಗಳು', 'ಮಾಸಿಕ ಹಣಕಾಸು ವರದಿಗಳು'],
      recommended: 'ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ',
      growth: 'ಗ್ರೋತ್ ಪ್ಲಾನ್',
      growthPrice: '₹7,499 – ₹14,999',
      growthFeatures: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಕಂಪ್ಲೈಯನ್ಸ್', 'ಟಿಡಿಎಸ್ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಫೈಲಿಂಗ್', 'ಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್', 'ಬ್ಯಾಂಕ್ ಸಮನ್ವಯ', 'ಹಣಕಾಸು ವರದಿಗಳು (P&L, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್)'],
      pro: 'ಪ್ರೊ ಪ್ಲಾನ್',
      proPrice: '₹15,499 – ₹20,000+',
      proFeatures: ['ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಟಿಡಿಎಸ್ ಪೂರ್ಣ ನಿರ್ವಹಣೆ', 'ಪೇರೋಲ್ ಪ್ರಕ್ರಿಯೆ', 'ಸಂಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಸೇವೆಗಳು', 'ಸುಧಾರಿತ ಹಣಕಾಸು ವರದಿಗಳು', 'ಆದ್ಯತೆಯ ಬೆಂಬಲ'],
      notIdeal: 'ಸೂಕ್ತ ಬೆಲೆ ಅಲ್ಲವೇ?',
      notIdealDesc: 'ಕಸ್ಟಮ್ ಪರಿಹಾರ ಬೇಕೇ? ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಅವಶ್ಯಕತೆಗಳನ್ನು ಚರ್ಚಿಸೋಣ.',
      plans: [
        { name: 'ಸ್ಟಾರ್ಟರ್ ಪ್ಲಾನ್', price: '₹1,999 – ₹6,999', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌', 'ಬೇಸಿಕ್ ಬುಕ್ಕೀಪಿಂಗ್', 'ಸೇಲ್ಸ್ ಮತ್ತು ಪರ್ಚೇಸ್ ಎಂಟ್ರಿಗಳು', 'ಮಾಸಿಕ ಹಣಕಾಸು ವರದಿಗಳು'] },
        { name: 'ಗ್ರೋತ್ ಪ್ಲಾನ್', price: '₹7,499 – ₹14,999', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಕಂಪ್ಲೈಯನ್ಸ್', 'ಟಿಡಿಎಸ್ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಫೈಲಿಂಗ್', 'ಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್', 'ಬ್ಯಾಂಕ್ ಸಮನ್ವಯ', 'ಹಣಕಾಸು ವರದಿಗಳು (P&L, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್)'] },
        { name: 'ಪ್ರೊ ಪ್ಲಾನ್', price: '₹15,499 – ₹20,000+', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಟಿಡಿಎಸ್ ಪೂರ್ಣ ನಿರ್ವಹಣೆ', 'ಪೇರೋಲ್ ಪ್ರಕ್ರಿಯೆ', 'ಸಂಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಸೇವೆಗಳು', 'ಸುಧಾರಿತ ಹಣಕಾಸು ವರದಿಗಳು', 'ಆದ್ಯತೆಯ ಬೆಂಬಲ'] }
      ],
      button: 'ಯೋಜನೆಯನ್ನು ಆರಿಸಿ',
      customButton: 'ಸಂಪರ್ಕಿಸಿ',
    }`;
  
  lines.splice(pricingStart, pricingEnd - pricingStart + 1, newPricing);
  fs.writeFileSync(path, lines.join('\n'));
  console.log('Successfully fixed Kannada pricing section');
} else {
  console.log('Could not find pricing markers for kn');
}
