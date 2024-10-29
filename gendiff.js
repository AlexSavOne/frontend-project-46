#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(`Comparing ${filepath1} and ${filepath2}`);
  });



program.parse(process.argv);
