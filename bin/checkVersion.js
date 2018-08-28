/*eslint no-console: "off"*/
const process = require('process');
const config = require('../package.json');
const comparator = config.engines.node.match(/[^0-9.]+/).toString();
const minVersion = process.version.match(/[0-9.]+/).toString();
const version = config.engines.node.match(/[0-9.]+/).toString();

function compareVersions(left, right) {
  if (left === right) return 0;
  const a = left.split('.').map(Number);
  const b = right.split('.').map(Number);
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      return 1;
    }
    if (a[i] < b[i]) {
      return -1;
    }
  }
  return true;
}

if (comparator !== '>' && comparator !== '>=') {
  console.log('Error: invalid Node version comparator, should contain > || >=');
  process.exit(1);
}

const comparison = compareVersions(version, minVersion);

const success =
  comparator === '>=' ? comparison === 0 || comparison === 1 : comparison === 1;

if (success) {
  console.log(
    `Notice: Node version check ${minVersion} ${comparator} ${version} good`
  );
  process.exit(0);
} else {
  console.log(`Error: Node version ${minVersion} not ${comparator} ${version}`);
  process.exit(1);
}
