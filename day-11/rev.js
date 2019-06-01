
function doReverse(){
    var str = document.getElementById( 'mystring' ).value;
    alert( "" + reverseString( str ) );
}

 
function reverseString( str ){
    str = str.split('');  
    str = str.reverse(); 
    str = str.join(''); 
    return str;
}