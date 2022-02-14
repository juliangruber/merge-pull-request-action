var fs     = require('fs');
var assert = require('assert');
var path   = require('path');

function markerExists (files, markers) {
  return markers.some(function(marker) {
    return files.some(function(file) {
      return file === marker;
    });
  });
}

function traverseFolder (directory, levels, markers) {
  var files = fs.readdirSync(directory);
  if (levels === 0) {
    return null;
  } else if (markerExists(files, markers)) {
    return directory;
  } else {
    return traverseFolder(path.resolve(directory, '..'), levels - 1, markers);
  }
}

module.exports = function findRoot(dir, opts) { 
  if (!dir) throw new Error("Directory not defined");
  opts = opts || {};
  var levels  = opts.maxDepth || findRoot.MAX_DEPTH;
  var markers = opts.markers  || findRoot.MARKERS;
  return traverseFolder(dir, levels, markers); 
};

module.exports.MAX_DEPTH = 9;
module.exports.MARKERS   = [ '.git', '.hg' ];
