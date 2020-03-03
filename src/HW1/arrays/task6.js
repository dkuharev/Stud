'use strict'
function reverse(arr){
    function ind(size){
        if (size%2)return (size-1)/2
        else return size/2
    }
    for(let i=0;i<ind(arr.length);i++){
        let a=arr[i]
        arr[i]=arr[arr.length-(i+1)]
        arr[arr.length-(i+1)]=a
    }
    return arr
}