import diffGenerator from '../diffGenerator.js';

describe('genDiff', () => {
  it('should return correct diff for two flat JSON objects', () => {
    const data1 = {
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false,
    };

    const data2 = {
      timeout: 20,
      verbose: true,
      host: 'hexlet.io',
    };

    const expectedDiff = `
- follow: false
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
`.trim();

    const result = diffGenerator(data1, data2);
    console.log('Generated Diff:\n', result);
    expect(result.trim()).toEqual(expectedDiff);
  });
});
