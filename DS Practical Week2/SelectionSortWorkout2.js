let array=[777,888,333,555,444,222,111,999];

function seletionSort(arr){
let limit=arr.length;
for(let i=0;i<limit;i++){
    let min=i;
    for(let j=i+1;j<limit;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
            
        }
        if(min!==i){
            [arr[i],arr[min]]=[arr[min],arr[i]];
        
    }
}
return arr;
}

console.log(seletionSort(array));