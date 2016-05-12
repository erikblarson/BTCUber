$(document).ready(function () {
  /*
  * Clamped-width.
  * Usage:
  *  <div data-clampedwidth=".myParent">This long content will force clamped width</div>
  *
  * Author: LV
  */
  $('[data-clampedwidth]').each(function () {
      var elem = $(this);
      var parentPanel = elem.data('clampedwidth');
      var resizeFn = function () {
          var sideBarNavWidth = $(parentPanel).width() + 30;
          elem.css('width', sideBarNavWidth);
      };

      resizeFn();
      $(window).resize(resizeFn);
  });
});

function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
