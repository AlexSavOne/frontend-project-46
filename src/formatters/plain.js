// src/formatters/plain.js

const plainFormatter = (diff) => {
  const formatValue = (value) => {
    if (value === null) return 'null';
    if (typeof value === 'object' && value !== null) return '[complex value]';
    return `'${value}'`;
  };

  const iter = (node, path) => Object.entries(node)
    .flatMap(([key, item]) => {
      const fullPath = path.length ? `${path}.${key}` : key;

      if (item && typeof item === 'object' && !Array.isArray(item)) {
        const { type, value, oldValue, newValue, children } = item;

        switch (type) {
          case 'added':
            return `Property '${fullPath}' was added with value: ${formatValue(value)}`;
          case 'removed':
            return `Property '${fullPath}' was removed`;
          case 'updated':
            return `Property '${fullPath}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
          case 'nested':
            return iter(children, fullPath);
          default:
            return [];
        }
      }
      return [];
    })
    .join('\n');

  console.log('Diff structure:', JSON.stringify(diff, null, 2));
  return iter(diff, '');
};

export default plainFormatter;
