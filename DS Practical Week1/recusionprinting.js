let arr = [2, 3, 4, 5, 6, 8, 9]

function binarySearch(start, end, array, target) {

    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
        return console.log("found");

    } else if (array[mid] > target) {
        return binarySearch(start, mid - 1, array, target);
    } 
    else if(array[mid]<target){
        return binarySearch(mid + 1, end, array, target);
    }else{
        console.log("not found");
    }
}

binarySearch(0, arr.length - 1, arr, 7);