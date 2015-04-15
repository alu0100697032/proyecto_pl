$(document).ready(function(){
    $("#ejemplo1").click(function(){
       $("#original").val("if a == 1 then b = 4"); 
    });
    $("#ejemplo2").click(function(){
       $("#original").val("a = 4 - 2 - 3"); 
    });
    $("#ejemplo3").click(function(){
       $("#original").val("a = ((4 / 2) / 3)"); 
    });
    $("#error").click(function(){
       $("#original").val("a = 3 + (4;"); 
    });
});