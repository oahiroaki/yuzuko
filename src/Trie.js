module.exports = (function() {
  function Trie(patterns) {
    var ret = create(patterns);
    this.patterns = ret.patterns;
    this.tree = ret.tree;
  }

  function create(patterns) {
    var rootTree = {};
    var tree = rootTree;
    patterns.forEach(function(str) {
      for (var i = 0, len = str.length; i < len; i++) {
        var val = str.charAt(i);
        if (tree.hasOwnProperty(val)) {
          tree = tree[val];
          continue;
        }
        var links = {};
        tree[val] = links;
        tree = (len === i + 1) ? rootTree : links;
      }
    });
    return {
      patterns: patterns,
      tree: rootTree
    };
  }

  function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  Trie.prototype.match = function match(str) {
    var tree = this.tree;
    for (var i = 0, len = str.length; i < len; i++) {
      var val = str.charAt(i);
      if (!tree.hasOwnProperty(val)) {
        return false;
      }
      if (len === i + 1 && isEmpty(tree[val])) {
        return true;
      }
      tree = tree[val];
    }
    return false;
  }

  return Trie;
})();
