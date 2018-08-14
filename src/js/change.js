/*
<script>
    function changeColor(id) {
     document.getElementById(id).style.color = "#ff0000"; // forecolor
    document.getElementById(id).style.backgroundColor = "#0000"; // backcolor
    }
</script>
*/


$(document).ready(function(){
            $(".navContainer li").click( function() { 
              $(".navContainer li").css("color", "#d49a9a");
              $(this).css("color", "#c2c0c0");
            });
});

