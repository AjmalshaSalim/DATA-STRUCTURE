function heapSort(array) {
    buildMaxHeap(array);
  
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
      [array[0], array[endIdx]] = [array[endIdx], array[0]];
      siftDown(array, 0, endIdx - 1);
    }
    return array;
  }
  
  function buildMaxHeap(array) {
    const lastParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
      siftDown(array, currentIdx, array.length - 1);
    }
  }
  
  function siftDown(array, startIdx, endIdx) {
    let currentIdx = startIdx;
    let leftChildIdx = currentIdx * 2 + 1;
  
    while (leftChildIdx <= endIdx) {
      let rightChildIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
  
      if (rightChildIdx !== -1 && array[rightChildIdx] > array[leftChildIdx]) {
        idxToSwap = rightChildIdx;
      } else {
        idxToSwap = leftChildIdx;
      }
  
      if (array[idxToSwap] > array[currentIdx]) {
        [array[currentIdx], array[idxToSwap]] = [array[idxToSwap], array[currentIdx]];
        currentIdx = idxToSwap;
        leftChildIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  
  const array = [4, 10, 3, 5, 1];
  console.log(heapSort(array)); 
  