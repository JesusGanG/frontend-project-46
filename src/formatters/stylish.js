import _ from 'lodash';

const spaceBeforeBracket = 4;

const formatItem = (item, depth) => {
  if (!_.isObject(item)) {
    return item;
  }
  const indent = depth * spaceBeforeBracket;
  const newIndent = ' '.repeat(indent);
  const keys = Object.keys(item);
  const result = keys.map((key) => {
    if (_.isObject(item[key])) {
      return `${newIndent}    ${key}: ${formatItem(item[key], depth + 1)}`;
    }
    return `${newIndent}    ${key}: ${item[key]}`;
  });
  return ['{', ...result, `${newIndent}}`].join('\n');
};

const formatToStylish = (data) => {
  const getItems = (items, depth) => items.flatMap((item) => {
    const newDepth = depth + 1;
    const indent = ' '.repeat(depth * spaceBeforeBracket);
    const backIndent = ' '.repeat((depth * spaceBeforeBracket) + spaceBeforeBracket);
    switch (item.status) {
      case 'nested':
        return `${indent}    ${item.key}: ${['{', ...getItems(item.children, newDepth), `${backIndent}}`].join('\n')}`;
      case 'changed':
        return [`${indent}  - ${item.key}: ${formatItem(item.oldValue, newDepth)}`,
          `${indent}  + ${item.key}: ${formatItem(item.newValue, newDepth)}`];
      case 'removed':
        return `${indent}  - ${item.key}: ${formatItem(item.value, newDepth)}`;
      case 'added':
        return `${indent}  + ${item.key}: ${formatItem(item.value, newDepth)}`;
      default:
        return `${indent}    ${item.key}: ${formatItem(item.value, newDepth)}`;
    }
  });
  const result = getItems(data, 0);
  return ['{', ...result, '}'].join('\n');
};

export default formatToStylish;
