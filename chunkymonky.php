<?php
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
 ?>
<!--
 function chunkArrayInGroups(arr, size) {

   var temp = [];
   var result = [];
     var i=0;

   for (var a = 0; a < arr.length; a++) {
     // if (a % size !== size - 1)
     //   temp.push(arr[a]);
     // else {
       if(i<size)
       {
       temp.push(arr[a]);
       i++;
     }
     else
     {
       i=0;
       temp = [];

       temp.push(arr[a]);
       i++;
     }
     if(temp.length==size)
     {
       result.push(temp);
       temp=[];
     }

   }
 if(temp.length>0)
       result.push(temp);
   // if (temp.length !== 0)
   //   result.push(temp);
   return result;
 }

 chunkArrayInGroups(["a", "b", "c", "d"], 2); -->
