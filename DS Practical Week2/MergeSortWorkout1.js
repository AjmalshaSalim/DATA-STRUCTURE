const mergeSort=(array)=>{
    if(array.length<=1){
        return array;
    }
     let limit = array.length;
     let mid=limit/2;
     let left=array.slice(0,mid);
     let right=array.slice(mid,limit);
     return mergeJoin( mergeSort(left),mergeSort(right));
}
const mergeJoin=(left,right)=>{
    const newArray=new Array(left.length+right.length);
    let i=0;
    let j=0;
    let k=0;
    while(i<left.length&&j<right.length){
        if(left[i]<right[j]){
            newArray[k++]=left[i++];
        }else{
            newArray[k++]=right[j++];
        }
    }
    while(i<left.length){
        newArray[k++]=left[i++];
    }
    while(j<right.length){
        newArray[k++]=right[j++];
    }
    return newArray;
}
let array = [5, 3, 1, 6, 4, 2];
console.log(mergeSort(array));