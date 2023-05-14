class MinHeap{
    constructor(){
        this.heap=[];
    }

    insert(value){
        this.heap.push(value);
        let i=this.heap.length-1;
        while(i>0){
            let parent=ParentIndex(i);
            if(this.heap[i]<this.heap[parent]){
                [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]];
                i=parent;
            }else{
                return;
            }
        }
    }

    ParentIndex(value){
return ((value-1)/2);
    }

    deleteMin(){
this.heap[0]=this.heap.pop();
let i=0;
this.heapify(i,this.heap.length-1);
    }

heapify(i,n){
    let smallest=i;
    let left= 2*i+1;
    let right=2*i+2;
    if(left<n && this.heap[left]<this.heap[smallest]){
        smallest=left;
    }else if(right<n && this.heap[right]<this.heap[smallest]){
        smallest=right;
    }
    if(smallest !=i){
        [this.heap[i],this.heap[smallest]]=[this.heap[smallest],this.heap[i]];
        return this.heapify(smallest,n);
    }
}

}
