$(document).ready(function () {
    $('#scrollToNext').click(function () {
        $('html, body').animate({
            scrollTop: $('#jumbotron2').offset().top
        }, 1000);
    });
})

    var myCarousel = document.querySelector('#fadingCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        wrap: true,
        touch: true,
        fade: true
    });