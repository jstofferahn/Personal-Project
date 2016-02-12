$(document).ready(function () {
   
    // $('nav').localScroll();
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0 && !$('nav').hasClass('inview'))
            $('nav').stop().addClass('inview').animate({ 'top': 0 }, 'slow');
        else if ($(this).scrollTop() < 1 && $('nav').hasClass('inview'))
            $('nav').stop().removeClass('inview').animate({ 'top': -75 }, 'slow');
    })
})