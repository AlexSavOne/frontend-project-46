import { test, expect, describe } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const tests = [
  ['filepath1.json', 'filepath2.json', 'expected_stylish.txt', 'stylish'],
  ['filepath1.json', 'filepath2.json', 'expected_plain.txt', 'plain'],
  ['filepath1.json', 'filepath2.json', 'expected_json.txt', 'json'],
  ['filepath1.yml', 'filepath2.yml', 'expected_stylish.txt', 'stylish'],
  ['filepath1.yml', 'filepath2.yml', 'expected_plain.txt', 'plain'],
  ['filepath1.yml', 'filepath2.yml', 'expected_json.txt', 'json'],
];

describe.each(tests)('Compare data', (data1, data2, expectedResult, format) => {
  const firstData = getFixturePath(data1);
  const secondData = getFixturePath(data2);
  const finalResult = genDiff(firstData, secondData, format);
  const expectedOutcome = readFile(expectedResult);
  test(`test ${data1} and ${data2} with ${format} format to ${expectedResult}`, () => {
    expect(finalResult.trim()).toBe(expectedOutcome.trim());
  });
});
