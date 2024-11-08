const plainFormatter = (diff) => {
  const formatValue = (value) => {
    if (value === null) return 'null';
    if (typeof value === 'object') return '[complex value]';
    return typeof value === 'string' ? `'${value}'` : value;
  };

  const iter = (nodes, path) => nodes
    .flatMap((node) => {
      const {
        action, key, oldValue, newValue, children,
      } = node;
      const fullPath = path ? `${path}.${key}` : key;

      switch (action) {
        case 'added':
          return `Property '${fullPath}' was added with value: ${formatValue(newValue)}`;
        case 'deleted':
          return `Property '${fullPath}' was removed`;
        case 'changed':
          return `Property '${fullPath}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
        case 'nested':
          return iter(children, fullPath);
        default:
          return [];
      }
    })
    .join('\n');

  return iter(diff, '');
};

export default plainFormatter;
