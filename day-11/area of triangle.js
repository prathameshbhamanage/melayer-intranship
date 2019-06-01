function triangle(){
    var a,b,c,sp,area
   
    a=6;
    b=7;
    c=8;
   sp = (a + b + c) / 2;
  area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    document.getElementById("area").value=area;
}
 
triangleArea(2, 4, 3.5);