let array=[8,6,4,3,2,5,9,7,1];

function BubbleSort(arr){
    let size=arr.length;
for(let i=0;i<size;i++){
    for(let j=0;j<size-i-1;j++){
        if(arr[j]>arr[j+1]){
[arr[j],arr[j+1]]=[arr[j+1],arr[j]]; 
    }
}
}
return arr;
}
console.log( BubbleSort(array));