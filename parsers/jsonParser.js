import fs from 'fs';

const parseJsonFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export default parseJsonFile;
