let array=[333,444,555,666,777];
function binarySearch(target){
    let start=0;
    let end=array.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(array[mid]==target){
            return console.log("found");
        }
        if(array[mid]>target){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return console.log("not found");
}
binarySearch(111);