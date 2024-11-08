import _ from 'lodash';

const data = {
  added: '+ ',
  deleted: '- ',
  space: '  ',
};

function getSpace(depth, symbol = '') {
  const space = '    ';
  return `${space.repeat(depth)}${symbol}`;
}

function stringify(value, depth) {
  const iter = (currentValue, currentDepth) => {
    if (!_.isObject(currentValue)) {
      return String(currentValue);
    }
    const lines = Object.entries(currentValue).map(
      ([key, val]) => `${getSpace(currentDepth + 1)}${key}: ${iter(val, currentDepth + 1)}`
    );
    return ['{', ...lines, `${getSpace(currentDepth)}}`].join('\n');
  };
  return iter(value, depth);
}

export default function getStylish(tree) {
  const iter = (node, depth) => {
    const lines = node.map((item) => {
      const { key, action, oldValue, newValue, children } = item;
      switch (action) {
        case 'deleted':
          return `${getSpace(depth, data.deleted)}${key}: ${stringify(oldValue, depth)}`;
        case 'added':
          return `${getSpace(depth, data.added)}${key}: ${stringify(newValue, depth)}`;
        case 'nested':
          return `${getSpace(depth)}${key}: ${iter(children, depth + 1)}`;
        case 'changed':
          return [
            `${getSpace(depth, data.deleted)}${key}: ${stringify(oldValue, depth)}`,
            `${getSpace(depth, data.added)}${key}: ${stringify(newValue, depth)}`,
          ].join('\n');
        default:
          return `${getSpace(depth)}${key}: ${stringify(oldValue, depth)}`;
      }
    });
    return ['{', ...lines, `${getSpace(depth)}}`].join('\n');
  };
  return iter(tree, 0);
}

