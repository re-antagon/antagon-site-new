const fs = require('fs');
const path = require('path');

function getMdFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMdFiles(fullPath));
    } else if (file.endsWith('.md') && !file.endsWith('index.md') && !file.endsWith('unique_items.md')) {
      results.push(fullPath);
    }
  });
  return results;
}

const godsDir = path.join(__dirname, '../docs/gods/items');
const files = getMdFiles(godsDir);
console.log(`Processing frontmatter for ${files.length} item files...`);

let updatedCount = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');
  const title = path.basename(filePath, '.md').trim();

  // Extract image URL
  const imgMatch = content.match(/!\[.*?\]\((.*?)\)/);
  let img = imgMatch ? imgMatch[1].split(' ')[0].trim() : '';

  // Extract item type from table
  let type = '';
  const typeMatch = content.match(/\|\s*Тип предмета\s*\|\s*([^|]+)\|/i);
  if (typeMatch) {
    type = typeMatch[1].trim();
  }

  // Extract existing description from frontmatter or content
  let description = '';
  const existingFmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (existingFmMatch) {
    const fmText = existingFmMatch[1];
    const descMatch = fmText.match(/description:\s*["']?(.*?)["']?\r?$/m);
    if (descMatch) {
      description = descMatch[1].trim();
    }
  }
  if (!description) {
    description = `${title} - предмет сервера Re:Antagon`;
  }

  // Build new YAML frontmatter
  const newFmLines = ['---'];
  newFmLines.push(`title: "${title.replace(/"/g, '\\"')}"`);
  if (type) {
    newFmLines.push(`type: "${type.replace(/"/g, '\\"')}"`);
  }
  if (img) {
    newFmLines.push(`img: "${img.replace(/"/g, '\\"')}"`);
  }
  newFmLines.push(`description: "${description.replace(/"/g, '\\"')}"`);
  newFmLines.push('---');

  const newFmBlock = newFmLines.join('\n');

  if (existingFmMatch) {
    content = content.replace(/^---\r?\n[\s\S]*?\r?\n---/, newFmBlock);
  } else {
    content = newFmBlock + '\n\n' + content;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  updatedCount++;
});

console.log(`Successfully updated frontmatter in ${updatedCount} files!`);
