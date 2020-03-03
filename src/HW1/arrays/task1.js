'use strict'
function minArr(arr){
let min=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<min)//поиск минимального элемента
        min=arr[i];   
}
return min;
}