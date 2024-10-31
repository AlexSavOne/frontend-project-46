// __tests__/gendiff.test.js

import path from 'path';
import gendiff from '../gendiff.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

test('gendiff with JSON files in stylish format', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  const expectedOutput = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
          key5: value5
      }
        setting6: {
          doge: {
            - wow:
            + wow: so much
          }
          key: value
          + ops: vops
      }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
          key: value
      }
      + nest: str
    }
  - group2: {
      abc: 12345
      deep: {
          id: 45
      }
  }
  + group3: {
      deep: {
          id: {
              number: 45
          }
      }
      fee: 100500
  }
}`;

  const result = gendiff(filepath1, filepath2, 'stylish');
  expect(result).toBe(expectedOutput.trim());
});

test('gendiff with YAML files in stylish format', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');

  const expectedOutput = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
          key5: value5
      }
        setting6: {
          doge: {
            - wow:
            + wow: so much
          }
          key: value
          + ops: vops
      }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
          key: value
      }
      + nest: str
    }
  - group2: {
      abc: 12345
      deep: {
          id: 45
      }
  }
  + group3: {
      deep: {
          id: {
              number: 45
          }
      }
      fee: 100500
  }
}`;

  const result = gendiff(filepath1, filepath2, 'stylish');
  expect(result).toBe(expectedOutput.trim());
});
