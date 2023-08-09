import _ from 'lodash';

const buildTree = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = [...keys].sort();

  const treePart = sortedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!_.has(obj2, key)) {
      return { key, status: 'removed', value: value1 };
    }
    if (!_.has(obj1, key)) {
      return { key, status: 'added', value: value2 };
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, status: 'nested', children: buildTree(value1, value2) };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        key, status: 'changed', oldValue: value1, newValue: value2,
      };
    }
    return { key, status: 'unChanged', value: value1 };
  });
  return treePart;
};

export default buildTree;
