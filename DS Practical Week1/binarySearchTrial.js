let array=[1,2,3,4,5,6];
function BinarySearch(array,target){
    let start=0;
    let end=array.length-1;
    while(start<=end){
    let mid=Math.floor((start+end)/2);
    if(array[mid]==target){
        console.log("found target");
        return;
    }else if(array[mid]>target){
        end=mid-1;
    }else{
        start=mid+1;
    }
}
}
BinarySearch(array,5);