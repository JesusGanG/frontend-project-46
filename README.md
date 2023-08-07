### Hexlet tests and linter status:
[![Maintainability](https://api.codeclimate.com/v1/badges/a347d60596c0d30cc8c7/maintainability)](https://codeclimate.com/github/JesusGanG/frontend-project-46/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/a347d60596c0d30cc8c7/test_coverage)](https://codeclimate.com/github/JesusGanG/frontend-project-46/test_coverage)[![Actions Status](https://github.com/JesusGanG/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/JesusGanG/frontend-project-46/actions)

# Annotation:
Done as part of a project on [Hexlet](https://ru.hexlet.io/).
Technology stack: Node.js, Commander.JS, Jest, npm, ESLint (airbnb), Git, GitHub, GitHub Actions.
## Description:
**Generator of difference** is the CLI programm that generate difference between two files.
Supporting formats: JSON, YML, YAML.
## How to install:
1. Make sure you have installed [Node.js](https://nodejs.org/en/) no lower version 12: ```node -v```
2. Clone repository: ```git@github.com:JesusGanG/frontend-project-46.git```
3. Change directory to frontend-project-46
4. Run the command: ```make install-deps```
```shell

## How to use:
You can use it as a script in terminal or as a library in your JavaScript project. You can format difference in three styles: stylish (default), plain and json. You can choose replacer: (default: "    ") or custom replacer for json and stylish format.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -r, --replacer <char>  output replacer (default: "    ")
  -h, --help             display help for command
```
## Use in your project:
```javascript
import genDiff from '@hexlet/code';
const diff = genDiff(filepath1, filepath2[, { format, replacer }]);
console.log(diff);
```
## Demonstration of the **genDiff** utility:
### Compare files in stylish format:
[![asciicast](https://asciinema.org/a/R5UohlaXCy6Pt9SFEBBXDyoHG.svg)](https://asciinema.org/a/R5UohlaXCy6Pt9SFEBBXDyoHG)
### Compare JSON vs JSON, YML vs YML, JSON vs YML
[![asciicast](https://asciinema.org/a/JPQLyvuK1f1EV6HNXvOghmkWw.svg)](https://asciinema.org/a/JPQLyvuK1f1EV6HNXvOghmkWw)
### Comparing nested JSONs and YMLs, default format output (stylish)
[![asciicast](https://asciinema.org/a/qBxt4NWRvkAReNbeWXvFv2T2V.svg)](https://asciinema.org/a/qBxt4NWRvkAReNbeWXvFv2T2V)
### comparing nested files, plain format output
[![asciicast](https://asciinema.org/a/vwMBMSsAxyMJfWxGqI3T6DCoK.svg)](https://asciinema.org/a/vwMBMSsAxyMJfWxGqI3T6DCoK)
### comparing nested files, JSON format output
[![asciicast](https://asciinema.org/a/Pg9nQwPYdvAuX3IGt7bRZoMH5.svg)](https://asciinema.org/a/Pg9nQwPYdvAuX3IGt7bRZoMH5)