const fs = require('fs');
const path = 'src/context/LanguageContext.tsx';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');
const badLinePart = 'ನಿಮ್ಮ ಆದಾಯ ತೆರಿಗೆ ರಿಟರ್ನ್ ಅನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಫೈಲ್ ಮಾಡುವು';
const fixedLine = '        desc: "ನಿಮ್ಮ ಆದಾಯ ತೆರಿಗೆ ರಿಟರ್ನ್ ಅನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಫೈಲ್ ಮಾಡುವುದು ಕೇವಲ ಕಾನೂನು ಅವಶ್ಯಕತೆಯಲ್ಲ — ಇದು ಸಾಲಗಳು, ವೀಸಾಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಟెಂಡರ್‌ಗಳಿಗೆ ದಾರಿ ಮಾಡಿಕೊడುತ್ತದೆ. ಡಾಕ್ಯುಮೆಂಟ್ ಸಂಗ್ರಹಣೆಯಿಂದ ನೋಟಿಸ್ ಪ್ರತಿಕ್ರಿಯೆಗಳವರೆಗೆ ನಾವು ಎಲ್ಲವನ್ನೂ ನಿರ್ವಹಿಸುತ್ತೇವೆ.",';

let found = false;
const fixedLines = lines.map(line => {
  if (line.includes(badLinePart)) {
    found = true;
    return fixedLine;
  }
  return line;
});

if (found) {
  fs.writeFileSync(path, fixedLines.join('\n'));
  console.log('Fixed the corrupted line.');
} else {
  console.log('Bad line part not found.');
}
