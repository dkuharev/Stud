'use strict'
function maxInd(arr){
    let MaxIndex=0;
    let max=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)//поиск индекса максимального элемента
        {
            max=arr[i];
            MaxIndex=i;
        }
    }
    return MaxIndex   
}