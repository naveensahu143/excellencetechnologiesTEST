//Assume there is a json object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}

var sorted ={};
count = 1;
obj.forEach(ob => {
   if( ob.id ==count)
   {
        sorted=ob;
   }
   count++;
});
