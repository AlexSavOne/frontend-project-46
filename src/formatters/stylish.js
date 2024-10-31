// formatters\stylish.js

import _ from 'lodash';

const indent = (level) => '    '.repeat(level);

const formatValue = (value, level) => {
  if (!_.isObject(value)) {
    return value;
  }
  const entries = Object.entries(value)
    .map(([key, val]) => `${indent(level + 1)}${key}: ${formatValue(val, level + 1)}`);
  return `{\n${entries.join('\n')}\n${indent(level)}}`;
};

const stylish = (data1, data2, level = 1) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();

  const differences = keys.map((key) => {
    if (!(key in data1)) {
      return `${indent(level)}+ ${key}: ${formatValue(data2[key], level)}`;
    }
    if (!(key in data2)) {
      return `${indent(level)}- ${key}: ${formatValue(data1[key], level)}`;
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      const childrenDiff = stylish(data1[key], data2[key], level + 1);
      return `${indent(level)}${key}: {\n${childrenDiff}\n${indent(level)}}`;
    }
    if (data1[key] !== data2[key]) {
      return `${indent(level)}- ${key}: ${formatValue(data1[key], level)}\n${indent(level)}+ ${key}: ${formatValue(data2[key], level)}`;
    }
    return `${indent(level)}  ${key}: ${formatValue(data1[key], level)}`;
  });

  return differences.join('\n');
};

export default stylish;
