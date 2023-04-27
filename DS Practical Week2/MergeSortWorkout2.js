const mergeSort=(array)=>{
    if(array.length<=1){
        return array;
    }
     let limit = array.length;
     let mid=limit/2;
     let firstHalf=array.slice(0,mid);
     let secondHalf=array.slice(mid,limit);
     return mergeJoin( mergeSort(firstHalf),mergeSort(secondHalf));
}

const mergeJoin=(firstHalf,secondHalf)=>{
    const newArray=new Array(firstHalf.length+secondHalf.length);
    let i=0;
    let j=0;
    let k=0;
    while(i<firstHalf.length&&j<secondHalf.length){
        if(firstHalf[i]<secondHalf[j]){
            newArray[k++]=firstHalf[i++];
        }else{
            newArray[k++]=secondHalf[j++];
        }
    }
    while(i<firstHalf.length){
        newArray[k++]=firstHalf[i++];
    }
    while(j<secondHalf.length){
        newArray[k++]=secondHalf[j++];
    }
    return newArray;
}
let array=[456,875,321,555,343,213,111]
console.log(mergeSort(array));