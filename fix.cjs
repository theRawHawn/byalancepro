const fs = require('fs');
const content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

// The goal is to find the first occurrence of "व्हाट्सएप के माध्यम से जुड़ें"
// and truncate the junk after it until the clean "kn: {"
const lines = content.split('\n');
let firstHiCtaLine = -1;
let cleanKnStartLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("व्हाट्सएप के माध्यम से जुड़ें") && firstHiCtaLine === -1) {
    firstHiCtaLine = i;
  }
  if (lines[i].trim() === "kn: {" && i > 500) {
    cleanKnStartLine = i;
  }
}

console.log(`Found hi CTA at ${firstHiCtaLine}, clean kn start at ${cleanKnStartLine}`);

if (firstHiCtaLine !== -1 && cleanKnStartLine !== -1) {
    const newLines = [
        ...lines.slice(0, firstHiCtaLine + 2), // include ctaButton and closing }
        '  },',
        ...lines.slice(cleanKnStartLine)
    ];
    
    // Also fix the kn pricing mangling
    let knContent = newLines.join('\n');
    const startMangle = knContent.indexOf("plans: [\n        { name: 'ಸ್ಟಾರ್ಟರ್', price: '₹2,999', peri    pricing: {");
    const endMangle = knContent.indexOf("title: 'ನಿಮ್ಮ ಹಣಕಾಸಿನ ಅನುಸರಣೆಯನ್ನು ಬಲಪಡಿಸಲು ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ?'");
    
    // Actually that's too complex. Let's just fix the specific bad lines using regex/substrings.
    
    // Fix known broken lines
    knContent = knContent.replace(/plans: \[\n\s+\{ name: 'ಸ್ಟಾರ್ಟರ್', price: '₹2,999', peri[\s\S]+?badge: 'ತಜ್ಞರ ಸಮಾಲೋಚನೆ',/g, 
        `plans: [
        { name: 'ಸ್ಟಾರ್ಟರ್ ಪ್ಲಾನ್', price: '₹1,999 – ₹6,999', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌', 'ಬೇಸಿಕ್ ಬುಕ್ಕೀಪಿಂಗ್', 'ಸೇಲ್ಸ್ ಮತ್ತು ಪರ್ಚೇಸ್ ಎಂಟ್ರಿಗಳು', 'ಮಾಸಿಕ ಹಣಕಾಸು ವರದಿಗಳು'] },
        { name: 'ಗ್ರೋತ್ ಪ್ಲಾನ್', price: '₹7,499 – ₹14,999', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಕಂಪ್ಲೈಯನ್ಸ್', 'ಟಿಡಿಎಸ್ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಫೈಲಿಂಗ್', 'ಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್', 'ಬ್ಯಾಂಕ್ ಸಮನ್ವಯ', 'ಹಣಕಾಸು ವರದಿಗಳು (P&L, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್)'] },
        { name: 'ಪ್ರೊ ಪ್ಲಾನ್', price: '₹15,499 – ₹20,000+', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಟಿಡಿಎಸ್ ಪೂರ್ಣ ನಿರ್ವಹಣೆ', 'ಪೇರೋಲ್ ಪ್ರಕ್ರಿಯೆ', 'ಸಂಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಸೇವೆಗಳು', 'ಸುಧಾರಿತ ಹಣಕಾಸು ವರದಿಗಳು', 'ಆದ್ಯತೆಯ ಬೆಂಬಲ'] }
      ],
      button: 'ಯೋಜನೆಯನ್ನು ಆರಿಸಿ',
      customButton: 'ಕಸ್ಟಮ್ ಬೆಲೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ',
      notIdeal: 'ಸೂಕ್ತ ಬೆಲೆ ಅಲ್ಲವೇ?',
      notIdealDesc: 'ಕಸ್ಟಮ್ ಪರಿಹಾರ ಬೇಕೇ? ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಅವಶ್ಯಕತೆಗಳನ್ನು ಚರ್ಚಿಸೋಣ.',
    },
    cta: {
      choosePlan: 'ಆರಿಸಿ',
      chooseStarter: 'ಸ್ಟಾರ್ಟರ್ ಆಯ್ಕೆಮಾಡಿ',
      chooseGrowth: 'ಗ್ರೋತ್ ಆಯ್ಕೆಮಾಡಿ',
      choosePro: 'ಪ್ರೊ ಆಯ್ಕೆಮಾಡಿ',
      contactCustom: 'ಕಸ್ಟಮ್ ಬೆಲೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ',
    },
    contact: {
      badge: 'ತಜ್ಞರ ಸಮಾಲೋಚನೆ',`);

    knContent = knContent.replace(/contact: \{ೋಜನೆಯನ್ನು ಆರಿಸಿ',\n\s+notIdealTitle: 'ಸೂಕ್ತ ಬೆಲೆ ಅಲ್ಲವೇ\?',\n\s+notIdealText: '"ಪ್ರತಿ ವ್ಯವಹಾರವು ವಿಶಿಷ್ಟವಾಗಿದೆ\. ನಾವು ನಿಮ್ಮ ಪ್ರಮಾಣವನ್ನು ಗೌರವಿಸುವ ಬೆಲೆಯನ್ನು ನಾವು ಒದಗಿಸುತ್ತೇವೆ\."',\n\s+ctaButton: 'ಕಸ್ಟಮ್ ಅಗತ್ಯಗಳನ್ನು ಚರ್ಚಿಸಿ',\n\s+\},/g, '');

    // Cleanup any remaining replacement chars
    knContent = knContent.replace(/\ufffd/g, '');

    fs.writeFileSync('src/context/LanguageContext.tsx', knContent);
    console.log("File fixed.");
} else {
    console.log("Could not find anchor lines.");
}
