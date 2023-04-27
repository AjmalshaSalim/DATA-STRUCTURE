function quickSortInPlace(arr, left = 0, right = arr.length - 1) 
  {
    if (left >= right) {
      return;
    }
    const pivotIndex = partition(arr,left,right);
    quickSortInPlace(arr,left, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, right);
  }
  function partition(arr,left,right) 
  {
    const pivotIndex = right;
    let i = left;

    for (let j = left; j< right; j++)
    {
      if (arr[j] < arr[pivotIndex]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    return i;
  }
  let arr = [5, 3, 1, 6, 4, 2];
quickSortInPlace(arr);
console.log(arr);
