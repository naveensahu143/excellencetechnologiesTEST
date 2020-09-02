const arr = [1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15];
let RepeatNum;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==arr[i+1])
    {
        RepeatNum=arr[i];
    }
}
console.log(RepeatNum);