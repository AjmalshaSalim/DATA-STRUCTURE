//  sum
//======

// let total=0;
// function sum(n){
// if(n!=0){
// total=total+n;

// return sum(n-1);
// }
// console.log(total);
// }
// sum(10);


//  array printing
//======
// let array=[2,3,4,5,6,7,8,9];
// let i=0;
// function printArray(array){
    
//     if(i!=array.length){
//         console.log(array[i]);
//         i++;
//         return printArray(array)
//     }
// }
// printArray(array);


//  sum of array
//==============
// let array=[2,4,6,8,7,5,9];
// let sum=0;
// let i=0;
// function sumOfArray(array){
//     if(i!=array.length){
//         sum=sum+array[i];     
// i++;
// return sumOfArray(array);
//     }
//     console.log(sum);
// }
// sumOfArray(array);


// palendrome using Recursion
//===========================
// let array=["M","A","L","A","Y","A","L","A","M"];
// let i=0;
// let flag=0;
// let limit=array.length;
// function palendrome(array){
//     if(i<Math.floor(limit/2)){
//         if(array[i]==array[limit-i-1]){
//             flag++;
//         }
//         i++;
//         return palendrome(array);
//     }
//     if(flag==Math.floor(limit/2)){
//         console.log("palendrome");
//     }else{
//         console.log("not");
//     }
// }
// palendrome(array);


//  factorial using Recursion
//===========================
// let fact=1;
// function factorial(n){
// if(n!=0){
//     fact=n*fact;
//     return factorial(n-1);
// }
// console.log("factorial ="+fact);
// }
// factorial(5)


//   reverse prime number recursion
//==================================

function prime(limit){
    let flag=0; 

  for(let i=2;i<=10;i++){
    for(let j=1;j<=limit;j++){ 
    if(j%i==0){
flag++;
    }
  }
  if(flag<=1){
    console.log(j);
}
  }
}
prime(50);