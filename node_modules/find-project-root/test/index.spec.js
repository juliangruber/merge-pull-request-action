var findRoot = require('../index');
var assert   = require('assert');
var sinon    = require('sinon');
var fs       = require('fs');
var path     = require('path');

describe("findRoot", function() {

  it("should exist", function() {
    assert(typeof findRoot === "function");
  });

  it("should throw if directory does not exist", function() {
    assert.throws(function() {
      findRoot(null);
    });
  });

  it("should read dir give to that", sinon.test(function() {
    this.stub(fs, 'readdirSync').returns([]);
    findRoot("test");
    assert(fs.readdirSync.calledWith("test"));
  }));

  it("should return true if .git exists", sinon.test(function() {
    this.stub(fs, 'readdirSync').returns(['.git']);
    var result = findRoot("test");
    assert(result === "test");
  }));

  it("should traverse to bottom folder if marker is not found in the first one", sinon.test(function() {
    var stub = this.stub(fs, 'readdirSync');
    stub.onCall(0).returns([]);
    stub.onCall(1).returns(['.git']);
    var loc    = "test/xx";
    var result = findRoot(loc);
    assert(result === path.resolve(loc, '..'));
  }));

  it("should return null if looping goes too deep", sinon.test(function() {
    var stub = this.stub(fs, 'readdirSync');
    stub.onCall(0).returns([]);
    stub.onCall(1).returns([]);
    var result = findRoot('test', {maxDepth: 2});
    assert(result === null);
  }));

  it("should search for custom markers", sinon.test(function() {
    this.stub(fs, 'readdirSync').returns([ 'balls' ]);
    assert(findRoot("test", { markers: [ 'balls' ] }));
  }));

  describe("default values", function() {
    beforeEach(function() {
      this.maxDepth = findRoot.MAX_DEPTH;
      this.markers  = findRoot.MARKERS;
    });

    afterEach(function() {
      findRoot.MAX_DEPTH = this.maxDepth;
      findRoot.MARKERS   = this.markers;
    });

    it("should return null if looping goes too deep", function() {
      findRoot.MAX_DEPTH = 0;
      assert(findRoot.MAX_DEPTH === 0);
    });

    it("should not find anything if max depth is 0", sinon.test(function() {
      findRoot.MAX_DEPTH = 0;
      this.stub(fs, 'readdirSync').returns([ '.git' ]);
      assert(findRoot("test") === null);
    }));

    it("should allow overriding default markers", sinon.test(function() {
      findRoot.MARKERS = [ "honeybadger" ];
      this.stub(fs, 'readdirSync').returns([ "honeybadger" ]);
      assert(findRoot("test"));
    }));

  });

});
