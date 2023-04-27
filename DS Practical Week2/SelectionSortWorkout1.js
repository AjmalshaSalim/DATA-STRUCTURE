let array = [555, 333, 777, 444, 222, 111];

function selection(arr)
{
    let limit=arr.length;
for(let i=0;i<limit-1;i++)
   {
    let min=i;
    for(let j=i+1;j<limit;j++)
      {
if(arr[j]<arr[min])
    {
    min=j;
    }
      }
    if(min!==i)
      {
[arr[i],arr[min]]=[arr[min],arr[i]];
      }
   }
return arr;
}

console.log(selection(array));
