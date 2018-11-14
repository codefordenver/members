/*eslint no-console: "off"*/
const process = require('process');
const config = require('../package.json');
const version = process.version.match(/[0-9.]+/).toString();
const minVersion = config.engines.node.match(/[0-9.]+/).toString();
const compareVersions = require('compare-versions');

const comparators = [
  { val: '>', validate: (r) => r == 1 },
  { val: '>=', validate: (r) => r == 0 || r == 1 },
];

const comparator = comparators.find(c => c.val == config.engines.node.match(/[^0-9.]+/).toString());
const result = comparator && comparator.validate(compareVersions(version, minVersion));

console.log(result === undefined ?
  'Error: invalid Node version comparator, should contain ' + comparators.map(c => c.val).join(' || ')
  : result ? `Notice: Node version check ${version} ${comparator.val} ${minVersion} good`
    : `Error: Node version ${version} not ${comparator.val} ${minVersion}`
);

process.exit(!result);