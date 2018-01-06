$(document).ready(function () {
    $("#collapseableNav").mCustomScrollbar({
         theme: "minimal"
    });
    
    $('#navButton').on('click', function () {
        $('#collapseableNav').toggleClass('active');
    });

});