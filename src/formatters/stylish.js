import _ from 'lodash';

const indent = (depth) => ' '.repeat(depth * 4 - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) return String(value);

  const lines = Object.entries(value).map(
    ([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`,
  );
  return ['{', ...lines, `${indent(depth)}  }`].join('\n');
};

export default (tree) => {
  const iter = (node, depth) => {
    const lines = node.map(({
      key, action, oldValue, newValue, children,
    }) => {
      switch (action) {
        case 'deleted':
          return `${indent(depth)}- ${key}: ${stringify(oldValue, depth)}`;
        case 'added':
          return `${indent(depth)}+ ${key}: ${stringify(newValue, depth)}`;
        case 'nested':
          return `${indent(depth)}  ${key}: ${iter(children, depth + 1)}`;
        case 'changed':
          return [
            `${indent(depth)}- ${key}: ${stringify(oldValue, depth)}`,
            `${indent(depth)}+ ${key}: ${stringify(newValue, depth)}`,
          ].join('\n');
        default:
          return `${indent(depth)}  ${key}: ${stringify(oldValue, depth)}`;
      }
    });
    return ['{', ...lines, `${indent(depth)}  }`].join('\n');
  };

  return iter(tree, 1).replace(/\s+$/, '');
};
