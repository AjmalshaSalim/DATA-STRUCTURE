                           console.log("SORTED ARRAY");
let array=[5,4,6,3,8,1];
array.sort((a,b)=>a-b);
for(let x of array){
    console.log(x);
}
                           console.log("FOREACH  -same");
let array1=[1,2,3,4,5];
array1.forEach(num=>console.log(num*2));

                          console.log("FILTER   -new");
let array3=array1.filter(value=>value%2==0);
console.log(array3);

                           console.log("MAP      -new");
let array4=array1.map(value=>value*2);
console.log(array4);

                           console.log("REDUCE   -new");
array5=array4.reduce((num1,num2)=>num1+num2);
console.log(array5);