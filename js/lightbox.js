// Creating our lightbox by appending divs to the body, one for the black background and one for the box.  
// Removing both when close is clicked
$(document).ready(function() {
    $('#lightboxClick').click(function() {
        $('body').append('<div id="lbWrapper"></div>');
        $('#lbWrapper').fadeIn(function() {
            $('body').append('<div id="lightbox"></div>');
            $('#lightbox').append('<div class="row"></div>')
            $('#lightbox').append('<div id="close">X</div>');
            $('#lightbox').append('<div id="lbText">Choose A Form</div>');
            $('#lightbox').append('<a href="contacthtml.html"><img id="lbImage" src="img/html5edited.png"/></a>');
            $('#lightbox').append('<a href="contactjs.html"><img id="lbImage" src="img/javascript_logoedited.png"/></a>');
            $('#lightbox').append('<a href="contactjquery.html"><img id="lbImage" src="img/jquerylogoedited.png"/></a>');
            $('#lightbox').fadeIn();
            
            $('#close').click(function() {
                closeLightBox();
            });
            
            $('#lbWrapper').click(function() {
                closeLightBox();
            });
            //  Added this function as we want to be able to use the same funcitonality
            //  If a user clicks the close button or clicks outside of the lightbox
            function closeLightBox() 
            {
                $('#lightbox').fadeOut(function(){
                    $('div').remove("#lightbox");
                    $('#lbWrapper').fadeOut(function() {
                        $('div').remove("#lbWrapper");
                    }); 
                }); 
            }
        });
    });
});
