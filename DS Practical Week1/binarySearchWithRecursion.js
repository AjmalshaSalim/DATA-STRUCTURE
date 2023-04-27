function binarySearch(arr, target, start, end) {
    if (start > end) {
      return -1; 
    } 
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; 
    } 
    if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid-1); 
    } else {
      return binarySearch(arr, target, mid+1, end); 
    }
  }
  
  const arr = [111, 222, 333, 444, 555];
  console.log(binarySearch(arr, 555,0,arr.length-1));
  