let array=[222,555,444,777,888];
function linearSearch(value){
for(let i of array){
    if(i===value){
        
        return console.log("found value");
    }
}
console.log("not found");
}
array.sort((a,b)=>a-b);
console.log(array);
linearSearch(545);