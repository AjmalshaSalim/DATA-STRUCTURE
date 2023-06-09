class TrieNode {
    constructor() {
      this.children = new Map();
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
        const char = word[i];
        if (!current.children.has(char)) {
          current.children.set(char, new TrieNode());
        }
        current = current.children.get(char);
      }
      current.isEndOfWord = true;
    }
  
    search(word) {
      let current = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children.has(char)) {
          return false;
        }
        current = current.children.get(char);
      }
      return current.isEndOfWord;
    }
  
    startsWith(prefix) {
      let current = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!current.children.has(char)) {
          return false;
        }
        current = current.children.get(char);
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
  