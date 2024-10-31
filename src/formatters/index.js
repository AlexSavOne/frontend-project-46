// formatters\index.js

import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
};

const format = (data1, data2, formatType) => {
  const formatter = formatters[formatType];
  if (!formatter) {
    throw new Error(`Unknown format: ${formatType}`);
  }
  return formatter(data1, data2);
};

export default format;
