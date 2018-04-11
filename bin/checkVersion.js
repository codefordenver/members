/*eslint no-console: "off"*/
const process = require('process');
const config = require('../package.json');
const comparator = config.engines.node.match(/[^0-9.]+/).toString();
const minVersion = process.version.match(/[0-9.]+/).toString();
const version = config.engines.node.match(/[0-9.]+/).toString();

// convert to array [major, minor, patch]
var min = minVersion.split('.');
var ver = version.split('.');

// turn elements in array from string to number
min = min.map(function(value, index) {
  return Number(value);
});
ver = ver.map(function(value, index) {
  return Number(value);
});

// version comparator
var test = ((a, b, comp) => {
  // allow only > or >= comparators
  if (comp !== '>' && comp !== '>=') {
    console.log(
      'Error: invalid Node version comparator, should contain > || >='
    );
    process.exit(1);
  }
  // greater than
  if (a[0] > b[0]) {
    return true;
  }
  if (a[1] > b[1]) {
    return true;
  }
  if (a[2] > b[2]) {
    return true;
  }
  // greater than or equal
  if (comp === '>=') {
    if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) {
      return true;
    }
  }
  return false;
})(min, ver, comparator);

if (test) {
  console.log(
    `Notice: Node version check ${minVersion} ${comparator} ${version} good`
  );
  process.exit(0);
} else {
  console.log(`Error: Node version ${minVersion} not ${comparator} ${version}`);
  process.exit(1);
}
