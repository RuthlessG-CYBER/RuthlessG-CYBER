const fs = require('fs');
const path = require('path');

const dir = '/home/ruthless/Desktop/RuthlessG-CYBER/src/components';

function replaceInDir(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/#e27d60/g, '#06b6d4');
      content = content.replace(/#d66a4a/g, '#0891b2');
      content = content.replace(/orange/g, 'cyan');
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir(dir);
console.log('Theme changed to Cyan/Teal successfully.');
