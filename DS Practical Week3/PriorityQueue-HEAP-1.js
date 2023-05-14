class priorityQueue{
    constructor(){
        this.heap=[];
    }
parentIndex(i){
    return Math.floor((i-1)/2);
}
Enqueue(value,priority){
    this.heap.push({value,priority});
    let i=this.heap.length-1;
    while(i>0){
        let parentIndex= this.parentIndex(i);
        if(this.heap[i].priority<this.heap[parentIndex].priority){
            [this.heap[i],this.heap[parentIndex]]=
            [this.heap[parentIndex],this.heap[i]]
            i=parentIndex;
        }
        else return;
    }
}
Dequeue(){
    if(this.heap.length===0){
        return null;
    }else if(this.heap.length===1){
        return this.heap.pop().value;
    }else{
        const min=this.heap[0].value;
        this,heap[0]=this.heap.pop();
        let i=0;
        this.shiftDown(i, this.heap.length - 1)
        return min
    }
}

shiftDown(i, n) {
    let smallest = i
    let left = this.leftChildIndex(i)
    let right = this.rightChildIndex(i)

    if (left < n && this.heap[left].priority < this.heap[smallest].priority) {
        smallest = left
    }

    if (right < n && this.heap[right].priority < this.heap[smallest].priority) {
        smallest = right
    }

    if (smallest != i) {
        [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
        this.shiftDown(smallest, n)
    }
}
} 