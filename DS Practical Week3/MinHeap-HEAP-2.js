class MinHeap{
    constructor(){
        this.heap=[]
    }

Insert(value){
this.heap.push(value);
let i=this.heap.length-1;
while(i>0){
    let parent=this.parent(i);
    if(this.heap[i]<this.heap[parent]){
        [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]];
        i=parent;
    }else{
        return;
    }
}
}

deleteMin(){
this.heap[0]=this.heap.pop();
let i=0;
this.heapify(this.heap.length-1);
}


heapify(i,n){
let small=i;
let left=this.left(i);
let right=this.right(i);
if(left<n && this.heap[left]<this.heap[small]){
small=left;
}else if(right<n && this.heap[right]<this.heap[small]){
    small=right;
}
if(small != i){
[this.heap[i],this.heap[small]]=[this.heap[small],this.heap[i]];
this.heapify(small,n);
}
}

left(i){
return (2*i)+1;
}
right(i){
    return (2*i)+2;
    }

parent(i){
return Math.floor((i-1)/2);
}

print(){
    console.log(this.heap);
}
}
let hp=new MinHeap();
hp.Insert(333);
hp.Insert(777);
hp.Insert(444);
hp.Insert(888);
hp.Insert(111);
hp.deleteMin();
hp.sortAscending();
hp.print();


