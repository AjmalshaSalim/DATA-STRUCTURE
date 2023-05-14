// class BinaryHeap{
//     constructor(){
//         this.array = []
//     }

//     insert(value){
//         this.array.push(value);
//         this.bubbleUp();
//     }

//     bubbleUp(){
//         let lastIndex = this.array.length -1;
//         let element = this.array[lastIndex];

//         while(lastIndex >=0){
//             let parentIdx = Math.floor((lastIndex - 1)/2);
//             let parent = this.array[parentIdx];

//             if(element < parent){
//                 this.array[parentIdx]= element;
//                 this.array[lastIndex]= parent;
//                 lastIndex = parentIdx;
//             }else{
//                 break;
//             }
//         }
//     }

//     remove(){
//         let min = this.array[0];
//         let last = this.array.pop();
//         if(this.array.length > 0){
//             this.array[0]=last;
//             this.heapify(0);
//         }
//         return min;
//     }

//     heapify(index){
//         let element = this.array[index];
        
//         while(true){
//             let leftChildIndex = 2*index +1;
//             let rightChildIndex = 2*index +2;
//             let swap = null;
//             let length = this.array.length;
            
//             if(leftChildIndex < length){
//                 let leftChild = this.array[leftChildIndex];
//                 if(leftChild < element){
//                     swap = leftChildIndex;
//                 }
//             }
//             if(rightChildIndex < length){
//                 let rightChild = this.array[rightChildIndex];
//                 if((rightChild < element && swap ==null) || (swap!=null && rightChild < leftChild)){
//                     swap = rightChildIndex
//                 }
//             }
//             if(swap === null){
//                 break
//             }else{
//                 this.array[index] = this.array[swap];
//                 this.array[swap] = element;
//             }
//         }
//     }
// }


// const heap = new BinaryHeap();

// heap.insert(12)
// heap.insert(34)
// heap.insert(1)
// heap.insert(62)
// heap.insert(23)
// heap.insert(3)
// heap.insert(8)
// heap.remove()
// console.log(heap);


//HeapSort

// function Sort(array){
//     buildHeap(array);
//     for(let i =array.length-1; i>0; i-- ){

//         [array[0],array[i]]=[array[i],array[0]]
//         heapify(array,0,i)
//     }

// }
// function buildHeap(array){
//     let parentIdx = Math.floor((array.length -1 - 1)/2)
//     for(let i=parentIdx; i>=0; i--){
//         heapify(array,i,array.length);
//     }

// }
// function heapify(array,index,length){
//     let element = array[index];

//     while(true){
//         let leftidx= 2*index+1;
//         let rightidx = 2*index +2;
//         let left ,right;
//         let swap=null;

//         if(leftidx < length){
//              left = array[leftidx]
//             if(left < element){
//                 swap = leftidx
//             }
//         }
//         if(rightidx < length){
//             right = array[rightidx]
//             if((swap ==null && right < element)||(swap !=null && right <left)){
//                 swap = rightidx
//             }
//         }
//         if(swap == null){
//             break;
//         }else{
//             array[index] = array[swap]
//             array[swap] = element;
//             index = swap;
//         }

//     }
// }

// let arr = [2,34,53,24,33,76,21,12,1]
// Sort(arr);
// console.log(arr);

