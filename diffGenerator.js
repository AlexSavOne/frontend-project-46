import _ from 'lodash';

const diffGenerator = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const differences = sortedKeys.reduce((acc, key) => {
    if (!(key in data1)) {
      acc[key] = 'added';
    } else if (!(key in data2)) {
      acc[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      acc[key] = 'changed';
    } else {
      acc[key] = 'unchanged';
    }
    return acc;
  }, {});

  return differences;
};

export default diffGenerator;
