let array=[2,3,4,5,7,5,4,8,9];


for(let i=0;i<array.length;i++){
    let count=1;
    for(let j=0;j<array.length;j++){
        if(j!=i&&array[i]==array[j]){
             count++;
        }
    }
    if(count==1){
        console.log(array[i]);
    }
}