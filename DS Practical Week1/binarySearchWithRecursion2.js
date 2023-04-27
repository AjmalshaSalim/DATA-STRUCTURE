let array=[444,666,555,888,999,111];
array.sort((a,b)=>a-b);
console.log(array);
function binarySearch(target,array,start,end){
    if(start>end){
        return console.log("not found");
    }
    let mid=Math.floor((start+end)/2);
    if(array[mid]==target){
        return console.log("found");
    }else if(array[mid]>target){
return binarySearch(target,array,0,mid-1);
    }else{
        return binarySearch(target,array,mid+1,end)
    }
    
}
binarySearch(555,array,0,array.length-1);