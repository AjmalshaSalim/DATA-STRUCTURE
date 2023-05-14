class MinHeap{
    constructor(){
        this.heap=[];
    }

    Insert(value){
this.heap.push(value);
let i=this.heap.length;
while(i>0){
    let parent=parentIndex(i);
    if(this.heap[i]<this.heap[parent]){
        
    }
}
    }

    parentIndex(i){
        return Math.floor((i-1)/2);
    }
}