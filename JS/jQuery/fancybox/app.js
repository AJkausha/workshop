//FANCYBOX(AND OUR MOBILE MENU)
$(function () {
  $('.trigger').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-is-open');
  });
  buttons: [
    // "zoom",
    //"share",
    // "slideShow",
    //"fullScreen",
    //"download",
    // "thumbs",
    "close"
    
  ],
  $('[data-fancybox="gallery"]').fancybox({
   loop:true,
   preload: true,
   animationEffect: "zoom",
   animationDuration: 366,

  });

});