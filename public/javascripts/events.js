$(document).ready(function(){
    $('#PARSE').click(function() {
        try {
          var result = parser.parse($('#original').val());
          $('#OUTPUT').html(result);
        } catch (e) {
          $('#OUTPUT').html(String(e));
        }
    });
});