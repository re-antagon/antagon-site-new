const fs = require('fs');
const path = require('path');

const godsDir = path.join(__dirname, '../docs/gods/items');
const godFolders = fs.readdirSync(godsDir).filter(f => fs.statSync(path.join(godsDir, f)).isDirectory());

console.log('Refactoring index.md files across god folders:', godFolders);

let updatedFilesCount = 0;

godFolders.forEach(folder => {
  const indexPath = path.join(godsDir, folder, 'index.md');
  if (!fs.existsSync(indexPath)) return;

  let content = fs.readFileSync(indexPath, 'utf-8');

  // Replace <ItemCard href="..." img="..." name="NAME" type="TYPE" /> or similar
  // with <ItemCard item="NAME" type="TYPE" />
  const updatedContent = content.replace(/<ItemCard\s+([^>]+)\/>/g, (match, p1) => {
    let href = '', img = '', name = '', type = '', item = '';

    const hrefMatch = p1.match(/href=["'](.*?)["']/);
    const imgMatch = p1.match(/img=["'](.*?)["']/);
    const nameMatch = p1.match(/(?:name|title)=["'](.*?)["']/);
    const typeMatch = p1.match(/type=["'](.*?)["']/);
    const itemMatch = p1.match(/item=["'](.*?)["']/);

    if (hrefMatch) href = hrefMatch[1];
    if (imgMatch) img = imgMatch[1];
    if (nameMatch) name = nameMatch[1];
    if (typeMatch) type = typeMatch[1];
    if (itemMatch) item = itemMatch[1];

    const itemName = item || name;
    if (!itemName) return match;

    if (type) {
      return `<ItemCard item="${itemName}" type="${type}" />`;
    } else {
      return `<ItemCard item="${itemName}" />`;
    }
  });

  if (content !== updatedContent) {
    fs.writeFileSync(indexPath, updatedContent, 'utf-8');
    updatedFilesCount++;
    console.log(`Updated ${indexPath}`);
  }
});

console.log(`Successfully refactored ${updatedFilesCount} index.md files!`);
