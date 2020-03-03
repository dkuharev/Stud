'use strict'
function halfRev(arr){
if(arr.length%2==0){
    for(let i=0;i<arr.length/2;i++)
    {
        let a=arr[i];
        arr[i]=arr[i+arr.length/2];
        arr[i+arr.length/2]=a;
    }
}
else
{
    for(let i=0;i<(arr.length-1)/2;i++)
    {
        let a=arr[i];
        arr[i]=arr[i+(arr.length+1)/2];
        arr[i+(arr.length+1)/2]=a;
    }
}
return arr
}