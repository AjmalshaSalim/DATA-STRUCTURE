//array ascending using loop
//==========================


let array = [5, 7, 3, 2, 4, 1, 6, 8];
let j;
for (let i = 0; i <= array.length - 1; i++) {
    for (j = i + 1; j <= array.length; j++) {
        let temp = 0;
        if (array[i] >= array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);


//array reverse using loop
//=========================

let tempe;
let limit = array.length - 1;
for (let i = 0; i < limit / 2; i++) {
    tempe = array[i];
    array[i] = array[limit - i]
    array[limit - i] = tempe;
}
console.log(array);
