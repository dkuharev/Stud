'use strict'
function sumNum(n){
    let sum=0
    for(;;)
    {
        sum+=n%10;
        n=Math.trunc(n/10);
        if(Math.trunc(n)<1) break;
    }
    return sum;
}