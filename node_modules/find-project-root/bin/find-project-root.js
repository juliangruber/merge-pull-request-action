#!/usr/bin/env node
var findRoot = require('../index');
var root     = findRoot(process.cwd());

if (root) {
  console.log(root);
} else {
  process.exit(1);
} 
