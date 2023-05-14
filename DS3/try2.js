// class BinaryHeap{
//     constructor(){
//         this.array = [];
//     }

//     insert(value){
//         this.array.push(value);
//         this.bubbleUp();
//     }

//     bubbleUp(){
//         let lastIndex = this.array.length-1;
//         let element = this.array[lastIndex];

//         while(lastIndex > 0){
//             let parentIndex = Math.floor((lastIndex - 1)/2)
//             let parent = this.array[parentIndex];

//             if(element < parent){
//                 this.array[lastIndex] = parent;
//                 this.array[parentIndex] = element;
//                 lastIndex = parentIndex;
//             }else{break}
//         }
//     }

//     remove(){
//         let min=this.array[0];
//         let last = this.array.pop();

//         if(this.array.length > 0){
//             this.array[0]= last;
//             this.heapify();
//         }
//         return min;
//     }

//     heapify(){
//         let index = 0;
//         let element = this.array[0];
//         let length = this.array.length

//         while(true){
//             let leftChildIndex = 2*index+1;
//             let rightChildIndex = 2*index+2;
//             let leftChild ,rightChild;
//             let swap =null;

//             if(leftChildIndex < length){
//                 leftChild = this.array[leftChildIndex]
//                 if(leftChild < element){
//                     swap = leftChildIndex;
//                 }
//             }
//             if(rightChildIndex < length){
//                 rightChild = this.array[rightChildIndex]
//                 if((rightChild < element && swap ==null) || (swap!=null && rightChild < leftChild)){
//                     swap = rightChildIndex;
//                 }
//             }

//             if(swap == null){
//                 break
//             }
//                 this.array[index]=this.array[swap]
//                 this.array[swap] = element;
//                 index = swap;
            
//         }
//     }
// }




// const one = new BinaryHeap();
// one. insert(1)
// one. insert(20)
// one. insert(3)
// one. insert(4)
// console.log(one);

function heapify(array,index,length){
    let element = array[index];

    while(1){
        let leftchildIndex = 2*index+1
        let rightChildeIndex = 2*index+2
        let leftChild,rightChild;
        let swap =null;

        if(leftchildIndex < length){
            leftChild = array[leftchildIndex]
            if(leftChild< element){
                swap = leftchildIndex;
            }
        }
        if(rightChildeIndex < length){
            rightChild = array[rightChildeIndex]
            if((rightChild < leftChild && swap!=null) || (swap == null && rightChild < element)){
                swap = rightChildeIndex
            }
        }

        if(swap == null){
            break 
        }else{
            array[index] = array[swap];
            array[swap] = element;
            index = swap;
        }
    }
}


function Sort(array){
    //building heap
    let parentIdx =Math.floor((array.length -1-1)/2)
    for(let i=parentIdx;i>=0;i--){
        heapify(array,i,array.length);
    }

    for(let i=array.length -1; i>0 ; i--){
        [array[i],array[0]]=[array[0],array[i]]
        heapify(array,0,i)
    }


}

let arr =[3,54,12,57,32,78]
Sort(arr)
console.log(arr);