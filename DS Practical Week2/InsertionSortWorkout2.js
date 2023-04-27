
let array = [555, 333, 777, 444, 222, 111];

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i;
        while(j>=0&&arr[j-1]>arr[j]){
            [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
            j--;
        }
    }
    return arr;
    
}

console.log(insertionSort(array));