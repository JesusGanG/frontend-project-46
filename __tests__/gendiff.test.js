import path from 'path';
import { test, expect } from 'jest';

import genDiff from '../bin/gendiff';

const fixturesPath = path.join(__dirname, '__fixtures__');

test('compare flat JSON files', () => {
	const filepath1 = path.join(fixturesPath, 'file1.json');
	const filepath2 = path.join(fixturesPath, 'file2.json');
	const expected = '{\n  follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n+ timeout: 20\n- timeout: 50\n+ verbose: true\n}';
	const result = genDiff(filepath1, filepath2);
	expect(result).toBe(expected);
});
