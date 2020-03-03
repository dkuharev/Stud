'use strict'

function sumNotChet(arr){
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        if(i%2!=0)sum+=arr[i];// сумма элементов с нечетными индексами
    }
    return sum;
}