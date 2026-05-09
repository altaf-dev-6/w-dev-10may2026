const fs = require('fs');
const path = require('path');

const filesToStrip = [
    ["webapp/src/app/page.tsx", 27, 76],
    ["webapp/src/app/rf-skin-tightening-machines/page.tsx", 18, 67],
    ["webapp/src/app/multifunctional-aesthetic-machines/page.tsx", 18, 67],
    ["webapp/src/app/ipl-hair-removal-machines/page.tsx", 18, 67],
    ["webapp/src/app/hifu-machines/page.tsx", 18, 67],
    ["webapp/src/app/diode-laser-machines/page.tsx", 18, 67],
    ["webapp/src/app/cryolipolysis-slimming-machines/page.tsx", 18, 67],
];

filesToStrip.forEach(([file, start, end]) => {
    const fullPath = path.join("c:\\Users\\Mdalt\\.gemini\\antigravity\\scratch\\Test Project 1 15thapril2026", file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    const startDel = start - 2;
    const endDel = end;
    
    // Splice removes from index `startDel` for length `endDel - startDel`
    lines.splice(startDel, endDel - startDel);
    
    fs.writeFileSync(fullPath, lines.join('\n'));
});
console.log("Stript nav tags successfully in node!");
