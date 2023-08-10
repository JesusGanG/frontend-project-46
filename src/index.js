import fs from 'fs';
import path from 'path';
import stringParserToObject from './parsers.js';
import formatSelector from './formatters/index.js';
import buildTree from './buildTree.js';

const getFileExtension = (filepath) => path.extname(filepath).slice(1);

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const fileStringExtractor = (absPath) => fs.readFileSync(absPath, 'UTF-8');

const genDiff = (path1, path2, format = 'stylish') => {
  const [pathAbs1, pathAbs2] = [getAbsolutePath(path1), getAbsolutePath(path2)];
  const [dataString1, dataString2] = [fileStringExtractor(pathAbs1), fileStringExtractor(pathAbs2)];

  const object1 = stringParserToObject(dataString1, getFileExtension(pathAbs1));
  const object2 = stringParserToObject(dataString2, getFileExtension(pathAbs2));
  const compareTree = buildTree(object1, object2);
  return formatSelector(compareTree, format);
};

export default genDiff;
