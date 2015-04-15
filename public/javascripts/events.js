$(document).ready(function(){
    $("#ejemplo1").click(function(){
       $("#original").val("a = 4 + 2 + 3"); 
    });
    $("#ejemplo2").click(function(){
       $("#original").val("a = 4 - 2 - 3"); 
    });
    $("#ejemplo3").click(function(){
       $("#original").val("a = 4 / 2 / 3"); 
    });
});