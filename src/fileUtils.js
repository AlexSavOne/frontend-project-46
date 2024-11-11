import path from 'path';
import fs from 'fs';

export const getExtension = (filename) => filename.split('.').slice(-1)[0];

export const readFile = (filePath) => {
  const fullPath = path.resolve(filePath);
  return fs.readFileSync(fullPath, 'utf-8');
};
