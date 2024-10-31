// src/formatters/plain.js

const plain = (diff) => {
  const formatValue = (value) => {
    if (value === null) return 'null';
    if (typeof value === 'object' && value !== null) return '[complex value]';
    return `'${value}'`;
  };

  const iter = (node, path) => Object.entries(node)
    .flatMap(([key, item]) => {
      const fullPath = path.length ? `${path}.${key}` : key;

      switch (item.type) {
        case 'added':
          return `Property '${fullPath}' was added with value: ${formatValue(item.value)}`;
        case 'removed':
          return `Property '${fullPath}' was removed`;
        case 'updated':
          return `Property '${fullPath}' was updated. From ${formatValue(item.oldValue)} to ${formatValue(item.value)}`;
        case 'nested':
          return iter(item.children, fullPath);
        default:
          return [];
      }
    })
    .join('\n');
  console.log('Diff structure:', JSON.stringify(diff, null, 2));
  return iter(diff, '');
};

export default plain;
