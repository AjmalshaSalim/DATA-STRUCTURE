let array = [6, 5, 7, 4, 3, 2, 8, 1];
array.sort((a, b) => a - b);
for (let c of array) {
    console.log(c);
}
function binary(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid]==target) {
            return console.log("found");;
        } else if (array[mid]<target) {
            start = mid +1;
        } else {
            end = mid -1;
        }

    }
    return console.log("not found");
}
binary(array,11);