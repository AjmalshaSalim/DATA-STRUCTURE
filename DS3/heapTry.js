class minHeap{
    heap = new Array();

    // constructor(){

    // }
    constructor(array){
        buildHeap(array);
    }

    buildHeap(array){
        heap = array;
        for(let i= parent(heap.length -1); i>=0;i-- ){
            shiftDown(i);
        }

    }

    shiftDown(currentIdx){
        
        let endIdx= this.heap.length-1;
        let leftIdx = this.leftChild(currentIdx);
        while(leftIdx <= endIdx){
            let rightIdx = this.rightChild(currentIdx)
            let idxToShift;

            if(rightIdx <= endIdx && this.heap.get(rightIdx) < this.heap.get(leftIdx) ){
                idxToShift = rightIdx;
            }else{
                idxToShift = leftIdx;
            }

            if(this.heap.get(currentIdx) > this.heap.get(idxToShift)){

                [this.heap.get(currentIdx),this.heap.get(idxToShift)]=[this.heap.get(idxToShift),his.heap.get(currentIdx)]
                currentIdx = idxToShift;
                leftIdx=this.leftChild(currentIdx);
                
            }else{
                return
            }
        }
    }

    shiftUp(currentIdx){
        let parentIdx = this.parent(currentIdx);
        while(currentIdx > 0 && this.heap.get(parentIdx) > this.heap.get(currentIdx)){
            [this.heap.get(currentIdx),this.heap.get(parentIdx)]=[this.heap.get(parentIdx),his.heap.get(currentIdx)]
            currentIdx = parentIdx;
            parentIdx  = this.parent(currentIdx);
        }
    }

    peek(){
        return this.heap.get(0);
    }

    remove(){
        [this.heap.get(0),this.heap.get(this.heap.length-1)]=[this.heap.get(this.heap.length-1),his.heap.get(0)]
        this.heap.remove(this.heap.length-1);
        this.shiftDown(0)
    }

    insert(value){
        this.heap.add(value);
        this.shiftUp(this.heap.length -1);

    }

    parent(i){
        return (i-1)/2;
    }

    leftChild(i){
        return 2*i +1
    }

    rightChild(i){
        return 2*1+2
    }

    display(){
        for(let i=0;i< this.heap.length;i++){
            console.log(this.heap.get(i));
        }
    }
}

const arr = [2,3,5,21,4,32,45]
const heap = new MinHeap(arr);
heap.display();
heap.insert(1)
heap.insert(15)
heap.insert(5)
console.log("-----------");
heap.display();