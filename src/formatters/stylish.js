const space = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(depth * spacesCount);

const stringify = (data, depth) => {
  if (!(data instanceof Object)) {
    return String(data);
  }
  const entries = Object.entries(data);
  const str = entries.map(([key, value]) => `\n${space(depth + 1)}${key}: ${stringify(value, depth + 1)}`).join('');
  return `{${str}\n${space(depth)}}`;
};

const stylish = (data) => {
  const iter = (node, depth) => {
    const lines = node.map((item) => {
      const nextDepth = depth + 1;
      switch (item.action) {
        case 'added':
          return `${space(depth)}  + ${item.key}: ${stringify(item.newValue, nextDepth)}`;
        case 'deleted':
          return `${space(depth)}  - ${item.key}: ${stringify(item.oldValue, nextDepth)}`;
        case 'changed':
          return [
            `${space(depth)}  - ${item.key}: ${stringify(item.oldValue, nextDepth)}`,
            `${space(depth)}  + ${item.key}: ${stringify(item.newValue, nextDepth)}`,
          ].join('\n');
        case 'nested':
          return `${space(depth)}    ${item.key}: {\n${iter(item.children, nextDepth)}\n${space(nextDepth)}}`;
        case 'unchanged':
          return `${space(depth)}    ${item.key}: ${stringify(item.oldValue, nextDepth)}`;
        default:
          throw new Error(`Unknown item type: '${item.action}'!`);
      }
    });
    return lines.join('\n');
  };

  return `{\n${iter(data, 0)}\n}`;
};

export default stylish;
