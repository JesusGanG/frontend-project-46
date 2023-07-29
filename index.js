import _ from 'lodash';

const genDiff = (obj1, obj2) => {
	const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();

	const diff = keys.map((key) => {
		if (!_.has(obj1, key)) {
			return `+ ${key}: ${JSON.stringify(obj2[key])}`;
		}
		if (!_.has(obj2, key)) {
			return `- ${key}: ${JSON.stringify(obj1[key])}`;
		}
		if (_.isEqual(obj1[key], obj2[key])) {
			return `  ${key}: ${JSON.stringify(obj1[key])}`;
		}
		return `- ${key}: ${JSON.stringify(obj1[key])}\n+ ${key}: ${JSON.stringify(obj2[key])}`;
	});

	return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;
