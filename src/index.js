import makeFormat from './formatters/index.js';
import { getDifferentObject, readFile, getExtension } from './diffBuilder.js';
import parseFile from './parsers/fileParser.js';

function genDiff(filepath1, filepath2, format = 'stylish') {
  const dataFile1 = readFile(filepath1);
  const dataFile2 = readFile(filepath2);
  const extension1 = getExtension(filepath1);
  const extension2 = getExtension(filepath2);
  const parseFile1 = parseFile(dataFile1, extension1);
  const parseFile2 = parseFile(dataFile2, extension2);
  const dataDiff = getDifferentObject(parseFile1, parseFile2);
  const result = makeFormat(dataDiff, format);
  return result;
}

export default genDiff;
