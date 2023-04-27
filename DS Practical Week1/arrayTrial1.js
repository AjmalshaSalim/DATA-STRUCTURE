let array1 = [1, 2, 3, 4, 5];
let array2 = [6,6, 7, 8, 9];
let newArray = [];
let j = 0;
let limit = array1.length + array2.length;
for (let i = 0; i < limit; i++) {
    if (i <= array1.length) {
        newArray[i] = array1[i];
    }
    if (i >= array1.length) {

        newArray[i] = array2[j];
        j++;
    }

}
console.log(newArray);

//  linear search and delete
//===========================
let find=6;
for(let i=0;i<newArray.length;i++){
    if(find==newArray[i]){
        let j=i;
        while(j<newArray.length){
            newArray[j]=newArray[j+1];
            j++;
        }
        newArray.pop();
    
}}
console.log(newArray);