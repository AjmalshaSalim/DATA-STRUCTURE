class TrieNode {
    constructor() {
      this.children = Array(26).fill(null);
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const charIndex = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (!current.children[charIndex]) {
          current.children[charIndex] = new TrieNode();
        }
        current = current.children[charIndex];
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const charIndex = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (!current.children[charIndex]) {
          return false;
        }
        current = current.children[charIndex];
      }
      return current.isEndOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const charIndex = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (!current.children[charIndex]) {
          return false;
        }
        current = current.children[charIndex];
      }
      return true;
    }
  }
  
  const trie = new Trie();
  trie.insert("apple");
  console.log(trie.search("apple")); // true
  console.log(trie.search("app")); // false
  console.log(trie.startsWith("app")); // true
  trie.insert("app");
  console.log(trie.search("app")); // true
  