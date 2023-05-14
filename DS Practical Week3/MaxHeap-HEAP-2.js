class MaxHeap{
    constructor(){
        this.heap=[];
    }

    insert(value){
        this.heap.push(value);
        let i=this.heap.length-1;
        while(i>0){
            let parent=this.pIndex(i);
            if(this.heap[i]>this.heap[parent]){
                [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]];
            i=parent;
            }else{
                return;
            }
        }
    }

    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor((arr.length)/2);i>=0;i--){
this.heapify(i,arr.length)
        }
    }

   

    print(){
        return console.log(this.heap);
    }


    pIndex(i){
        return ((i-1)/2);
            }
    deleteMax(){
        this.heap[0]=this.heap.pop();
        let i=0;
        this.heapify(i,this.heap.length);
    }
    heapify(i,n){
        let largest=i;
        let left=(2*i)+1;
        let right=(2*i)+2;
        if(left<n && this.heap[left]>this.heap[largest]){
            largest=left;
        }
        if(right<n && this.heap[right]>this.heap[largest]){
            largest=right;
        }
        if(largest !=i){
            [this.heap[i],this.heap[largest]]=[this.heap[largest],this.heap[i]];
        this.heapify(largest,n);
        }
    }
}
let hp=new MaxHeap();
hp.insert(555);
hp.insert(777);
hp.insert(333);
hp.insert(888);
hp.insert(666);
hp.insert(999);
hp.insert(111);
hp.insert(222);
hp.deleteMax();
hp.print();


