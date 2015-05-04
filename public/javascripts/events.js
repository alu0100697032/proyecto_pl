$(document).ready(function(){
    $('#PARSE').click(function() {
        try {
          var result = pl0.parse($('#original').val());
          $('#OUTPUT').html(JSON.stringify(result,undefined,2));
        } catch (e) {
          $('#OUTPUT').html('<div class="error"><pre>\n' + String(e) + '\n</pre></div>');
        }
    });
    //botones con ejemplos
    $("#ejemplo1").click(function(){
       $("#original").val("if a == 1 then b = 4."); 
    });
    $("#ejemplo2").click(function(){
       $("#original").val("a = 4 - 2 - 3."); 
    });
    $("#ejemplo3").click(function(){
       $("#original").val("a = 4 / 2 / 3."); 
    });
    $("#error").click(function(){
       $("#original").val("a = 3 + (4."); 
    });
});