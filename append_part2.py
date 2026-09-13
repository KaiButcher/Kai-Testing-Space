import json, csv, os, re

# Let's read existing CSV lines
records = []
if os.path.exists('public/grime-archive/grime_archive.csv'):
    with open('public/grime-archive/grime_archive.csv', 'r', encoding='utf-8', errors='ignore') as f:
        reader = csv.reader(f)
        header = next(reader, None)
        for row in reader:
            if len(row) >= 4:
                records.append({
                    "title": row[0].strip(),
                    "folder": row[1].strip(),
                    "type": row[2].strip(),
                    "link": row[3].strip()
                })

print(f"Loaded {len(records)} existing records from CSV.")
