// gendiff.js

import { Command } from 'commander';
import path from 'path';
import parseFile from './parsers/fileParser.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const absolutePath1 = path.resolve(process.cwd(), `__fixtures__/${filepath1}`);
  const absolutePath2 = path.resolve(process.cwd(), `__fixtures__/${filepath2}`);

  try {
    const data1 = parseFile(absolutePath1);
    const data2 = parseFile(absolutePath2);
    return format(data1, data2, formatType);
  } catch (error) {
    console.error(`Error reading files: ${error.message}`);
    return null;
  }
};

export default genDiff;

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.opts().format));
  });

program.parse(process.argv);
