// parsers\yamlParser.js

import fs from 'fs';
import yaml from 'js-yaml';

const parseYamlFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return yaml.load(data);
};

export default parseYamlFile;
