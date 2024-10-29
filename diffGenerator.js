import _ from 'lodash';

const diffGenerator = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const differences = sortedKeys.map((key) => {
    if (!(key in data1)) {
      return `+ ${key}: ${data2[key]}`;
    }
    if (!(key in data2)) {
      return `- ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
    }
    return null;
  }).filter(Boolean);

  return differences.join('\n').trim();
};

export default diffGenerator;
