import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import stringParserToObject from './parsers.js';
import formatSelector from './formatters/index.js';
import buildTree from './buildTree.js';

// проверка расширений файлов, определение дальнешего пути работы
export const getFileExtension = (filepath) => path.extname(filepath).slice(1);

// Превращатель пути в абсолютный
const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

// Извлекаем строку из файла по указанному пути
export const fileStringExtractor = (absPath) => fs.readFileSync(absPath, 'UTF-8');

// Формирователь АСТ дерева сравнений из 2 объектов

const genDiff = (path1, path2, format = 'stylish') => {
  if (path1.length === 0 || path2.length === 0) {
    return 'enter valid path';
  }
  const [pathAbs1, pathAbs2] = [getAbsolutePath(path1), getAbsolutePath(path2)];
  const [dataString1, dataString2] = [fileStringExtractor(pathAbs1), fileStringExtractor(pathAbs2)];

  const object1 = stringParserToObject(dataString1, getFileExtension(pathAbs1));
  const object2 = stringParserToObject(dataString2, getFileExtension(pathAbs2));
  const compareTree = buildTree(object1, object2);
  return formatSelector(compareTree, format);
};

export default genDiff;
