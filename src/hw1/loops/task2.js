'use strict'
function simple(a){
let sum=0;
    for(let i=1;i<=a;i++)
    {
        if(a%i==0 )
        {
            sum++;
        }
        if(sum>2)break;
    }
    if(sum==2)return true
	else return false
}