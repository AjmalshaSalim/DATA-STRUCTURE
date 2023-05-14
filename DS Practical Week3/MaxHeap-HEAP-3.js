class MaxHeap{
constructor(){
    this.heap=[];
}


insert (value){
    this.heap.push(value);
    let i=this.heap.length-1;
    while(i>0){
        let parent=this.parentFinder(i);
        if(this.heap[i]>this.heap[parent]){
            [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]];
            i=parent;
        }else{
            return;
        }
    }
}

deleteMax(){
    this.heap[0]=this.heap.pop();
    let i=0;
    this.heapify(i,this.heap.length);
}

heapify(i,n){
    let large=i;
    let left=this.leftFinder(i);
    let right=this.rightFinder(i);
    if(left<n && this.heap[left]>this.heap[large]){
        large=left;
    }else if(right<n && this.heap[right]>this.heap[large]){
        large=right;
    }
    if(large !=i){
        [this.heap[i],this.heap[large]]=[this.heap[large],this.heap[i]];
     this.heapify(large,n);
    }
}



parentFinder(i){
return Math.floor((i-1)/2);
}


leftFinder(value){
    return ((2*value)+1);
}

rightFinder(value){
    return ((2*value)+2);
}

printHeap(){
    return console.log(this.heap);
}

}
let heap=new MaxHeap();
heap.insert(444);
heap.insert(222);
heap.insert(777);
heap.insert(333);
heap.insert(555);
heap.printHeap();