#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';
import { program } from 'commander';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
	.arguments('<filepath1> <filepath2>')
	.description('Compares two configuration files and shows a difference.')
	.option('-f, --format <type>', 'output format')
	.action((filepath1, filepath2) => {
		const fullPath1 = path.resolve(process.cwd(), filepath1);
		const fullPath2 = path.resolve(process.cwd(), filepath2);

		const file1Data = fs.readFileSync(fullPath1, 'utf-8');
		const file2Data = fs.readFileSync(fullPath2, 'utf-8');

		const diff = genDiff(JSON.parse(file1Data), JSON.parse(file2Data));
		console.log(diff);
	});

program.parse(process.argv);
