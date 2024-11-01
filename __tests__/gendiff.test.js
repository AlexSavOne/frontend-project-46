// __tests__/gendiff.test.js
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('gendiff', () => {
  const filepath1 = getFixturePath('filepath1.json');
  const filepath2 = getFixturePath('filepath2.json');

  test('stylish format (default)', () => {
    const expected = readFile('expected_stylish.txt');
    expect(genDiff(filepath1, filepath2)).toBe(expected);
  });

  test('plain format', () => {
    const expected = readFile('expected_plain.txt');
    expect(genDiff(filepath1, filepath2, 'plain')).toBe(expected);
  });

  test('json format', () => {
    const expected = readFile('expected_json.txt');
    expect(genDiff(filepath1, filepath2, 'json')).toBe(expected);
  });

  const filepath1Yaml = getFixturePath('filepath1.yml');
  const filepath2Yaml = getFixturePath('filepath2.yml');

  test('stylish format for YAML', () => {
    const expected = readFile('expected_stylish.txt');
    expect(genDiff(filepath1Yaml, filepath2Yaml)).toBe(expected);
  });

  test('plain format for YAML', () => {
    const expected = readFile('expected_plain.txt');
    expect(genDiff(filepath1Yaml, filepath2Yaml, 'plain')).toBe(expected);
  });

  test('json format for YAML', () => {
    const expected = readFile('expected_json.txt');
    expect(genDiff(filepath1Yaml, filepath2Yaml, 'json')).toBe(expected);
  });
});
