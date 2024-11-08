import stylishFormatter from './stylish.js';
import plainFormatter from './plain.js';
import jsonFormatter from './json.js';

function makeFormat(data, formatType = 'stylish') {
  const formatters = {
    stylish: stylishFormatter,
    plain: plainFormatter,
    json: jsonFormatter,
  };
  const formatter = formatters[formatType];
  if (!formatter) {
    throw new Error(`Unknown format: ${formatType}`);
  }
  return formatter(data);
}

export default makeFormat;
