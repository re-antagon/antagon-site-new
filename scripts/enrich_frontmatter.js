const fs = require('fs');
const path = require('path');

const smallFiles = new Set(fs.readdirSync(path.join(__dirname, '../docs/public/assets/items/custom/small')));
const modelFiles = new Set(fs.readdirSync(path.join(__dirname, '../docs/public/assets/items/custom/models_preview')));
const vanillaFiles = new Set(fs.readdirSync(path.join(__dirname, '../docs/public/assets/items')).filter(f => f.endsWith('.png')));

const translitMap = {
  'древень': 'treebeard_bark',
  'звездный_лук': 'zvezdniyluk_gui',
  'звёздный_лук': 'zvezdniyluk_gui',
  'импульсный_меч': 'impulsniy_sword_gui',
  'клинок_безмолвия': 'klinok_bezmolvya_gui',
  'кровопускатель': 'hishnik_gui',
  'лунный_клинок_рывка': 'lunar_dash_dugger_gui',
  'меч_превосходства': 'mech_prevoshodstva_gui',
  'посох_природы': 'posoh_prirodi_gui',
  'травяной_щит': 'silva_shield_gui',
  'удочка_обреченных_душ': 'udochka_obrechennih_dush_gui',
  'удочка_обречённых_душ': 'udochka_obrechennih_dush_gui',
  'широкополая_шляпа': 'shirokopolaya_shlyapa_gui',
  'щит_кусака': 'shit_kusaka_gui'
};

function resolveAssetPath(rawSrc) {
  if (!rawSrc) return '';
  let clean = rawSrc.trim().split(' ')[0].split('?')[0].split('#')[0];
  
  if (clean.includes('/models_preview/')) {
    const fn = path.basename(clean);
    if (modelFiles.has(fn)) return '/assets/items/custom/models_preview/' + fn;
  }
  if (clean.includes('/small/')) {
    const fn = path.basename(clean);
    if (smallFiles.has(fn)) return '/assets/items/custom/small/' + fn;
  }
  
  const baseName = path.basename(clean, path.extname(clean)).trim();
  const lowerBase = baseName.toLowerCase();
  
  if (translitMap[lowerBase]) {
    const mapped = translitMap[lowerBase];
    if (modelFiles.has(mapped + '.png')) return '/assets/items/custom/models_preview/' + mapped + '.png';
    if (smallFiles.has(mapped + '.png')) return '/assets/items/custom/small/' + mapped + '.png';
  }
  
  if (modelFiles.has(baseName + '_gui.png')) {
    return '/assets/items/custom/models_preview/' + baseName + '_gui.png';
  }
  if (modelFiles.has(lowerBase + '_gui.png')) {
    return '/assets/items/custom/models_preview/' + lowerBase + '_gui.png';
  }
  if (modelFiles.has(baseName + '.png')) {
    return '/assets/items/custom/models_preview/' + baseName + '.png';
  }
  if (modelFiles.has(lowerBase + '.png')) {
    return '/assets/items/custom/models_preview/' + lowerBase + '.png';
  }
  if (smallFiles.has(baseName + '.png')) {
    return '/assets/items/custom/small/' + baseName + '.png';
  }
  if (smallFiles.has(lowerBase + '.png')) {
    return '/assets/items/custom/small/' + lowerBase + '.png';
  }
  if (vanillaFiles.has(baseName + '.png')) {
    return '/assets/items/' + baseName + '.png';
  }
  if (vanillaFiles.has(lowerBase + '.png')) {
    return '/assets/items/' + lowerBase + '.png';
  }
  
  return rawSrc;
}

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

  // Extract existing frontmatter
  let existingImg = '';
  let existingType = '';
  let existingDesc = '';
  const existingFmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (existingFmMatch) {
    const fmText = existingFmMatch[1];
    const imgMatch = fmText.match(/img:\s*["']?(.*?)["']?\r?$/m);
    if (imgMatch) existingImg = imgMatch[1].trim();

    const typeMatch = fmText.match(/type:\s*["']?(.*?)["']?\r?$/m);
    if (typeMatch) existingType = typeMatch[1].trim();

    const descMatch = fmText.match(/description:\s*["']?(.*?)["']?\r?$/m);
    if (descMatch) existingDesc = descMatch[1].trim();
  }

  // Extract image URL from markdown body if missing
  let img = existingImg;
  if (!img) {
    const bodyImgMatch = content.match(/!\[.*?\]\((.*?)\)/);
    if (bodyImgMatch) img = bodyImgMatch[1].split(' ')[0].trim();
  }
  img = resolveAssetPath(img);

  // Extract item type from table if missing
  let type = existingType;
  if (!type) {
    const typeMatch = content.match(/\|\s*Тип предмета\s*\|\s*([^|]+)\|/i);
    if (typeMatch) {
      type = typeMatch[1].trim();
    }
  }

  let description = existingDesc;
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
