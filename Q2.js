let arr = [0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1];
let count=0;
for(let i=0;i<arr.length;i++)
{   
    
    if(arr[i]==1 && arr[i+1]==1)
    {
        tcount++;

    }else{
        var tcount=0;
    }
    if(tcount>count)
    {
        count=tcount;
    }
}
count=count+1;
console.log("maximum number of 1s is: " + count);