$(document).ready(function() {
    $('#scrollToNext').click(function(){
        $('html, body').animate({
            scrollTop: $('#jumbotron2').offset().top
        }, 1000);
    });
});