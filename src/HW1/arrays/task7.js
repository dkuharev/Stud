'use strict'
function kolNotChet(arr){
let amount=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)amount++;//количество нечетных элементов 
}
return amount
}