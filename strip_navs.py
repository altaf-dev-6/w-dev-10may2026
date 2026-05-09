import os

files_to_strip = [
    ("webapp/src/app/page.tsx", 27, 76),
    ("webapp/src/app/rf-skin-tightening-machines/page.tsx", 18, 67),
    ("webapp/src/app/multifunctional-aesthetic-machines/page.tsx", 18, 67),
    ("webapp/src/app/ipl-hair-removal-machines/page.tsx", 18, 67),
    ("webapp/src/app/hifu-machines/page.tsx", 18, 67),
    ("webapp/src/app/diode-laser-machines/page.tsx", 18, 67),
    ("webapp/src/app/cryolipolysis-slimming-machines/page.tsx", 18, 67),
]

for file_path, start, end in files_to_strip:
    full_path = os.path.join(r"c:\Users\Mdalt\.gemini\antigravity\scratch\Test Project 1 15thapril2026", file_path)
    with open(full_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    start_del = start - 2
    end_del = end
    new_lines = lines[:start_del] + lines[end_del:]
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

print("Navigators successfully removed from all pages.")
