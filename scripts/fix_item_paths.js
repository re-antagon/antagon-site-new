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
  let clean = rawSrc.trim().split(' ')[0];
  
  // Strip url query/hash
  clean = clean.split('?')[0].split('#')[0];
  
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
  
  // Check transliteration
  if (translitMap[lowerBase]) {
    const mapped = translitMap[lowerBase];
    if (modelFiles.has(mapped + '.png')) return '/assets/items/custom/models_preview/' + mapped + '.png';
    if (smallFiles.has(mapped + '.png')) return '/assets/items/custom/small/' + mapped + '.png';
  }
  
  // Check model preview with _gui.png
  if (modelFiles.has(baseName + '_gui.png')) {
    return '/assets/items/custom/models_preview/' + baseName + '_gui.png';
  }
  if (modelFiles.has(lowerBase + '_gui.png')) {
    return '/assets/items/custom/models_preview/' + lowerBase + '_gui.png';
  }
  
  // Check model preview exact
  if (modelFiles.has(baseName + '.png')) {
    return '/assets/items/custom/models_preview/' + baseName + '.png';
  }
  if (modelFiles.has(lowerBase + '.png')) {
    return '/assets/items/custom/models_preview/' + lowerBase + '.png';
  }
  
  // Check small
  if (smallFiles.has(baseName + '.png')) {
    return '/assets/items/custom/small/' + baseName + '.png';
  }
  if (smallFiles.has(lowerBase + '.png')) {
    return '/assets/items/custom/small/' + lowerBase + '.png';
  }
  
  // Check vanilla
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
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allMds = getMdFiles(path.join(__dirname, '../docs/gods/items'));
let fixedCount = 0;

allMds.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  let changed = false;
  
  // Replace in markdown images
  content = content.replace(/(!\[.*?\]\()([^)\s]+)(.*?\))/g, (match, prefix, src, suffix) => {
    if (src.includes('/assets/items/custom/big/') || src.includes('models_png/')) {
      const resolved = resolveAssetPath(src);
      if (resolved !== src) {
        changed = true;
        return prefix + resolved + suffix;
      }
    }
    return match;
  });
  
  // Replace in frontmatter img
  content = content.replace(/^img:\s*["']?([^"'\r\n]+)["']?\r?$/m, (match, src) => {
    if (src.includes('/assets/items/custom/big/') || src.includes('models_png/')) {
      const resolved = resolveAssetPath(src);
      if (resolved !== src) {
        changed = true;
        return `img: "${resolved}"`;
      }
    }
    return match;
  });
  
  if (changed) {
    fs.writeFileSync(f, content, 'utf-8');
    fixedCount++;
  }
});

console.log(`Successfully fixed image paths in ${fixedCount} markdown files.`);
