class Node{
    constructor(){
        this.children = {}
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    insert(word){
        let curr = this.root;

        for(let i = 0; i<word.length; i++){
            let ch = word[i];
            if(!curr.children[ch]){
                curr.children[ch]=new Node();
             
            }
            curr = curr.children[ch];
        }
        curr.isEndOfWord =true;
    }

    search(word){
        let curr = this.root;
        for(let i = 0; i<word.length; i++){
            let ch = word[i];
            if(!curr.children[ch]){
                return false;             
            }
            curr = curr.children[ch];
        }
        return curr.isEndOfWord
    }

    traversal(){

        let words = []
        
        function traversalHelper(node, word){

            for(let [char,childNode] of Object.entries(node.children)){
                
                traversalHelper(childNode, word +char)
            }
                if(node.isEndOfWord){
                    words.push(word);
                }
              
        }
        
        traversalHelper(this.root, "")
        return words;
    }

    trieSuffix(word){

        for(let i =0; i<word.length; i++ ){
            trieSuffixHelper(this.root,word,i)
        }

        function trieSuffixHelper(curr, word, index){

            for(let i =index; i< word.length; i++){
                let ch = word[i];
                if(!curr.children[ch]){
                    curr.children[ch] = new Node();
                }
                curr = curr.children[ch];
            }
            curr.isEndOfWord = true
        }

    }

    delete(word){
        this.deleteHelper(word, this.root,0);
    }
    deleteHelper(word, curr, index){

        if(index === word.length){
            curr.isEndOfWord =false
            return Object.keys(curr.children).length === 0
        }

        let ch = word[index]

        if(!curr.children[ch]){
            return false
        }

        let shouldDeleteCurrentNode = this.deleteHelper(word,curr.children[ch], index+1)

        if(shouldDeleteCurrentNode){
            delete curr.children[ch];
            return Object.keys(curr.children).length ===0;
        }

        return false
    }   
}


const trie = new  Trie();

trie.insert("bhagath")
trie.insert("Danger")
console.log(trie.search("bhagath"))
console.log(trie.traversal())
trie.trieSuffix("brototype")
// trie.delete("danger")

console.log(trie.traversal())

