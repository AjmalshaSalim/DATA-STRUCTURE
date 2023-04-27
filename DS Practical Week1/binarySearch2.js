let array=[666,555,222,888,111];
array.sort((a,b)=>a-b);
console.log(array);
function binarySearch(value){
let start=0;
let end=array.length-1;
while(start<=end){
    let mid=Math.floor(start+end)/2;
    if(array[mid]==value){
        return console.log("found value "+ value);
    }
    if(array[mid]<value){
        start=mid+1;
    }else{
        end=mid-1;
    }
}
console.log("not found");
}
binarySearch(559);