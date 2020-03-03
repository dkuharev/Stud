'use strict'
function minInd(arr){
    let MinIndex=0;
    let min=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<min)//поиск индекса минимального элемента 
        {
            min=arr[i];
            MinIndex=i;
        }   
    }
    return MinIndex;
}