import diffGenerator from '../diffGenerator.js';

describe('genDiff', () => {
  it('should return correct diff for two flat JSON objects', () => {
    const data1 = { one: 'eon', two: 'two', four: true };
    const data2 = { two: 'own', zero: 4, four: true };

    const expectedDiff = {
      one: 'deleted',
      two: 'changed',
      four: 'unchanged',
      zero: 'added',
    };

    expect(diffGenerator(data1, data2)).toEqual(expectedDiff);
  });
});
