import stylish from './stylish';
import plain from './plain';
import json from './json';

const formatSelector = (compareTree, format) => {
	if (format === 'stylish') return `{\n${stylish(compareTree)}}`;
	if (format === 'plain') return plain(compareTree);
	if (format === 'json' || format === 'JSON') return json(compareTree);
	return ('Error: Enter valid format or use default - stylish');
};

export default formatSelector;
