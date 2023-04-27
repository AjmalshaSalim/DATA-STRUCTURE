function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return;
    }
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  function partition(arr, left, right) {
    const pivot = right;
    let i = left;
    
    for (let j = left; j < right; j++) {
      if (arr[j] < arr[pivot]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
  
    return i;
  }
  let arr = [751, 933, 187, 466, 884, 912];
quickSort(arr);
console.log(arr);
