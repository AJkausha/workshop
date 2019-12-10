//OPEN MENU - Vanilla JS version
// const body = document.querySelector("body");
//  const openMenu = document.querySelector("#open-menu");
//  const closeMenu = document.querySelector("#close-menu");
//  openMenu.addEventListener('click', function(){
//   body.classList.add('menu-is-open');
//  });
//  closeMenu.addEventListener('click', function(){
//   body.classList.remove('menu-is-open');
//  });

//OPEN MENU - jQuery version
$(function () {
  $('.trigger').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-is-open');
  });


// Hide element
// $('footer').hide();

// Remove element
// $('header').remove();

// FadeIn / FadeOut  element
// $('main').fadeIn(2000, function(){
//   $('header').fadeOut(2000)
// });

  //   if (this.id === 'open-menu') {
  //   }
  //   else {
  //     $('body').removeClass('menu-is-open');
  //   }

  // $('#open-menu').on('click', function(e){
  //   e.preventDefault();
  //   $('body').addClass('menu-is-open');
  // });

  // $('#close-menu').on('click', function(e){
  //   e.preventDefault();
  //   $('body').removeClass('menu-is-open');
  // });
  $('#section-1').css
  $('header h2').on('click', function(){
    // $('section').first().slideToggle();
    $('#section-1').animate({
      width: "200",
      opacity:1

    },5000);
  
  });
});

//

 
