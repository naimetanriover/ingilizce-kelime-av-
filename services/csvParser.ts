
import { Word, ThemeId } from '../types';

export interface ColumnMapping {
  english: string;
  turkish: string;
  unit: string;
}

export const parseCSV = (
  content: string, 
  themeId: ThemeId, 
  mapping: ColumnMapping,
  existingWords: Word[] = []
): Word[] => {
  const lines = content.split('\n').filter(line => line.trim() !== '');
  if (lines.length === 0) return [];

  // Very simple CSV parser handling quotes
  const parseLine = (line: string) => {
    const result = [];
    let cur = "";
    let inQuote = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') inQuote = !inQuote;
      else if (char === ',' && !inQuote) {
        result.push(cur.trim());
        cur = "";
      } else {
        cur += char;
      }
    }
    result.push(cur.trim());
    return result;
  };

  const header = parseLine(lines[0].toLowerCase());
  
  // If the first line doesn't look like a header (contains no mapping keywords), treat all lines as data and use defaults
  const isHeader = header.some(h => 
    h.includes('en') || h.includes('tr') || h.includes('word') || h.includes('turkish') || h.includes('meaning')
  );

  const startIdx = isHeader ? 1 : 0;
  const actualLines = lines.slice(startIdx);

  const engIdx = isHeader ? header.indexOf(mapping.english.toLowerCase()) : 0;
  const trIdx = isHeader ? header.indexOf(mapping.turkish.toLowerCase()) : 1;
  const unitIdx = isHeader ? header.indexOf(mapping.unit.toLowerCase()) : -1;

  // Regex to remove patterns like (v), (n), (adj), (v.), (n.) etc.
  // This looks for a space followed by a parenthesis containing letters and possibly a dot
  const cleanPattern = /\s*\([a-z.]+\)/gi;

  const newWords: Word[] = actualLines.map((line, idx) => {
    const cells = parseLine(line);
    let en = cells[engIdx === -1 ? 0 : engIdx] || "";
    let tr = cells[trIdx === -1 ? 1 : trIdx] || "";
    let unit = unitIdx !== -1 ? cells[unitIdx] : "Genel";

    // 1. Clean special patterns like "What is the Turkish for 'Word'?" (specific to some of your data)
    const enMatch = en.match(/'(.*?)'/);
    if (enMatch) en = enMatch[1];

    // 2. Remove (v), (n), (adj) etc. from both English and Turkish
    en = en.replace(cleanPattern, "").trim();
    tr = tr.replace(cleanPattern, "").trim();

    return {
      id: `${themeId}-${unit}-${idx}-${Date.now()}`,
      themeId,
      unit: (unit || "Genel").replace(cleanPattern, "").trim(),
      english: en,
      turkish: tr,
      level: 0,
    };
  });

  return newWords;
};

// Auto-mapping logic
export const suggestMapping = (header: string[]): ColumnMapping => {
  const h = header.map(v => v.toLowerCase());
  const map: ColumnMapping = { english: '', turkish: '', unit: '' };
  
  const engAliases = ['en', 'english', 'word', 'kelime', 'term'];
  const trAliases = ['tr', 'turkish', 'meaning', 'anlam', 'tanım'];
  const unitAliases = ['unit', 'theme', 'category', 'unite', 'ünite', 'level'];

  map.english = header[h.findIndex(val => engAliases.some(a => val.includes(a)))] || header[0];
  map.turkish = header[h.findIndex(val => trAliases.some(a => val.includes(a)))] || header[1];
  map.unit = header[h.findIndex(val => unitAliases.some(a => val.includes(a)))] || '';

  return map;
};
