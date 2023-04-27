let arrays=[555,444,777,222,999,333,111];
function Bubblesort(array){
let length=array.length;
for(let i=0;i<length;i++){
    for(let j=0;j<length-i;j++){
        if(array[j]>array[j+1]){
            let temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
    }
}
return array;
}
console.log(Bubblesort(arrays));