class node{
    constructor(){
        this.child={};
        this.wordEnd=false;
    }
}
class trie{
    constructor(){
        this.root=new Node();
    }



    insertValue(word){
        let current=this.root;
for(let i=0;i<value.length;i++){
    let char=word[i];
    if(!child[char]){
        current.child[char]=new Node();
    }
current=current.children[char];
}
current.wordEnd=true;
    }
}