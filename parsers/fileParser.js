import path from 'path';
import parseJsonFile from './jsonParser.js';
import parseYamlFile from './yamlParser.js';

const parseFile = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const extname = path.extname(absolutePath);

  switch (extname) {
    case '.json':
      return parseJsonFile(absolutePath);
    case '.yml':
    case '.yaml':
      return parseYamlFile(absolutePath);
    default:
      throw new Error(`Unsupported file extension: ${extname}`);
  }
};

export default parseFile;
