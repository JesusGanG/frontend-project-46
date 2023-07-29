#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import _ from 'lodash';

const program = new Command();

const genDiff = (filepath1, filepath2) => {
  const resolvedPath1 = path.resolve(filepath1);
  const resolvedPath2 = path.resolve(filepath2);

  const data1 = fs.readFileSync(resolvedPath1, 'utf-8');
  const data2 = fs.readFileSync(resolvedPath2, 'utf-8');

  const obj1 = JSON.parse(data1);
  const obj2 = JSON.parse(data2);

  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  const diff = keys.map((key) => {
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (_.isEqual(obj1[key], obj2[key])) {
        return `  ${key}: ${obj1[key]}`;
      }
      return [`+ ${key}: ${obj2[key]}`, `- ${key}: ${obj1[key]}`];
    }
    if (_.has(obj1, key)) {
      return `- ${key}: ${obj1[key]}`;
    }
    return `+ ${key}: ${obj2[key]}`;
  });

  return `{\n${diff.flat().join('\n')}\n}`;
};

program.version('0.1.0');
program.arguments('<filepath1> <filepath2>');
program.description('Compares two configuration files and shows a difference.');
program.action((filepath1, filepath2) => {
  const diffOutput = genDiff(filepath1, filepath2);
  console.log(diffOutput);
});

program.parse(process.argv);
