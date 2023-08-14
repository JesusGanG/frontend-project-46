import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const filesForTests = [
  ['file1.json', 'file2.json', 'stylish'],
  ['file1.yml', 'file2.yaml', 'plain'],
  ['file1.json', 'file2.yaml', 'json'],
];
test.each(filesForTests)('gendiff work correctly %#', (file1, file2, format) => {
  const result = genDiff(getFixturePath(file1), getFixturePath(file2), format);
  const expectedResult = readFixture(`expected-${format}.txt`);
  expect(result).toEqual(expectedResult);
});

test('Default output format', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const expectResult = readFixture('expected-stylish.txt');
  expect(result).toEqual(expectResult);
});

test('Wrong output format', () => {
  const error2 = new Error('Format txt - is incorrect!. Enter valid format or use default - stylish');
  expect(() => genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'txt')).toThrow(error2);
});
