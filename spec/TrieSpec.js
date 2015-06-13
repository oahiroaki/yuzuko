var Trie = require('../src/Trie');

describe('Trie', function() {
  describe('#match', function() {
    it('aaaaa match aaaaa', function() {
      var trie = new Trie(['aaaaa']);
      expect(trie.match('aaaaa')).toBe(true);
    });

    it('aaaaa not match bbb', function() {
      var trie = new Trie(['aaaaa']);
      expect(trie.match('bbb')).toBe(false);
    });

    it('aaaaa not match aaaa', function() {
      var trie = new Trie(['aaaaa']);
      expect(trie.match('aaaa')).toBe(false);
    });
  });
});
