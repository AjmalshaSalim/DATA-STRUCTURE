function heapify(array,index, n){

    let element = array[index];
    let length = n;

    // console.log(array);
        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftchild, rightchild;
            let swap = null;

            if (leftChildIndex < length) {
                leftchild = array[leftChildIndex];
                if (leftchild > element) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightchild = array[rightChildIndex];
                if ((swap == null && rightchild > element) || (swap !== null && rightchild > leftchild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) {
                break;
            }

            array[index] = array[swap];
            array[swap] = element
            index = swap
        }
    }

    function buildHeap(array){
        let parentIdx =Math.floor(((array.length-1)-1)/2);
        for(let i = parentIdx; i >=0;i--){
            heapify(array,i,array.length);
        }
    }


function Sort(array){
    buildHeap(array);

    for(let i = array.length -1; i>0;i--){
        [array[0],array[i]]=[array[i],array[0]]
        heapify(array,0,i);
    }
    

    return array;
}

let arr = [23,54,12,84,34,6];
Sort(arr)
console.log(arr);