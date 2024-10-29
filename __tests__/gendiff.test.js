import path from 'path';
import url from 'url';
import parseFile from '../parsers/fileParser.js';
import diffGenerator from '../diffGenerator.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('genDiff', () => {
  it('should return correct diff for two flat JSON files', () => {
    const filepath1 = path.resolve(__dirname, '../__fixtures__/file1.json');
    const filepath2 = path.resolve(__dirname, '../__fixtures__/file2.json');

    const expectedDiff = `- follow: false
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true`.trim();

    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    const result = diffGenerator(data1, data2);

    console.log('Generated Diff:\n', result);
    expect(result).toEqual(expectedDiff);
  });

  it('should return correct diff for two flat YAML files', () => {
    const filepath1 = path.resolve(__dirname, '../__fixtures__/filepath1.yml');
    const filepath2 = path.resolve(__dirname, '../__fixtures__/filepath2.yml');

    const expectedDiff = `- follow: false
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true`.trim();

    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    const result = diffGenerator(data1, data2);

    console.log('Generated Diff:\n', result);
    expect(result).toEqual(expectedDiff);
  });
});
