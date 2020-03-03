function sumChet(){
    let sum=0,amount=0;
    for(let i=1;i<100;i++)
    {
        if(i%2==0)
        {
            sum+=i;
            amount++;
        }
    }
    return [sum,amount]
}