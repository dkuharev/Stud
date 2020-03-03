'use strict'
function podbor(n){ //Метод последовательного подбора
    let i;
    for(i=1;;i++) if(Math.sqrt(n)-i<1)break; 
    return i
}
function binar(n){
    let a,b
    for(a=0 , b=n;;) //Метод бинарного поиска
    {
        if((a+b)/2>Math.trunc(Math.sqrt(n)))b=(a+b)/2
        else if((a+b)/2<Math.trunc(Math.sqrt(n)))a=(a+b)/2
        else break;
        if(n==1)
        {
            b=1.5;
            break;
        }
    }
    return (a+b)/2
}