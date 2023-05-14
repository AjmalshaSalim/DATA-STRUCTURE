class node{
    constructor(){
        this.child={};
        this.IsEnd=false;
    }
}
class trie{
    constructor(){
        this.root=new node();
    }

    addWord(word){
let current=this.root;
for(let i=0;i<word.length;i++){
    let char=word[i];
    if(!current.child[char]){
        current.child[char]=new node();
    }
    current=current.child[char]
}
current.IsEnd=true;
    }

    Delete(word){
this.deleteHelper(this.root,word,0)
    }

    deleteHelper(curr,word,index){
        if(index=== word.length){
            curr.isEndOfWord = false;
            return Object.keys(curr.child).length===0;
        }
        let char=word[index];
        if(!curr.child[char]){
            return false;
        }
        let deleteCurrent=this.deleteHelper(curr.child[char],word,index+1);
        if(deleteCurrent){
            delete curr.child[char];
            return Object.keys(curr.child).length===0;
        }
return false;
    }

    print(){
        let current=this.root;
        while(current){
            console.log(current.child);
        }
    }
}
let tr=new trie();
tr.addWord("AJMALSHA");
tr.addWord("AJAX")
tr.print();