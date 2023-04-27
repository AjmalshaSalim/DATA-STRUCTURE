let array=[234,221,218,243,211,277,265];

function SelectionSort(arr){
let size=arr.length;
for(let i=0;i<size;i++){
    let min=i;
    for(let j=i+1;j<size;j++){
if(arr[i]>arr[j]){
    min=j;
}
    }
    if(min!==i){
        [arr[i],arr[min]]=[arr[min],arr[i]];
    }
}return arr;
}

console.log(SelectionSort(array));