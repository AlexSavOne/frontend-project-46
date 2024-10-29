#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import parseFile from './parsers/fileParser.js';
import diffGenerator from './diffGenerator.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), `__fixtures__/${filepath1}`);
    const absolutePath2 = path.resolve(process.cwd(), `__fixtures__/${filepath2}`);

    try {
      const data1 = parseFile(absolutePath1);
      const data2 = parseFile(absolutePath2);
      const result = diffGenerator(data1, data2);
      console.log(result);
    } catch (error) {
      console.error(`Error reading files: ${error.message}`);
    }
  });

program.parse(process.argv);
