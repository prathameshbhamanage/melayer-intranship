 function multable(){
     var no;
     var i;
     no=Number(document.getElementById("multable").value);
  for(i=0;i>=10;i++)
     {
         var ans=document.getElementsById("answer");
         ans.innerHTML +=(no*i);
     }
  
     }