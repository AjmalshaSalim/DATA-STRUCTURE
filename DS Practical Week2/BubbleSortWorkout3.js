let array=[32,56,12,44,23,87,68,57];

function BubbleSort(arr){
    let size=arr.length;
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(BubbleSort(array));