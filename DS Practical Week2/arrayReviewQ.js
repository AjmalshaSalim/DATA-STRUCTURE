let array=[2,3,4,5,4,7,3,9,3];


function ArrayDuplicates(arr){
    let limit=arr.length;
    for(let i=1;i<limit;i++){
        let count=1;
        for(let j=i+1;j<limit;j++){
            if(arr[i]==arr[j]){
                count++;
                arr[j]=0;
            }
           
        }
        if(arr[i]!=0){
        console.log(arr[i]+" count = "+count);
        }
    }
}
ArrayDuplicates(array);
console.log(array);