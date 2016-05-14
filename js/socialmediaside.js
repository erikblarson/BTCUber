$(document).ready(function(){
    $('#includedContent').fadeOut();
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 75) {        
        $('#includedContent').fadeIn(200);
    } 
});