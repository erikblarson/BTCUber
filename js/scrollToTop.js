$(window).scroll(function() {
    if ($(this).scrollTop() >= 75) {        
        $('#scrollToTop').fadeIn(200);    
    } else {
        $('#scrollToTop').fadeOut(200);  
    }
});
$('#scrollToTop').click(function() {     
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});