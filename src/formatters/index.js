import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatSelector = (compareTree, format) => {
  const formatLowerCase = format.toLowerCase();
  if (formatLowerCase === 'stylish') return stylish(compareTree);
  if (formatLowerCase === 'plain') return plain(compareTree);
  if (formatLowerCase === 'json') return json(compareTree);
  throw new Error(`Format ${format} - is incorrect!. Enter valid format or use default - stylish`);
};

export default formatSelector;
