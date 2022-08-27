$(function () {

  $('.hero__popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      },
    }
  });


  $('.menu__link').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 150;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });




});



$(window).scroll(function () {

  var scroll = $(window).scrollTop();
  if (scroll >= 700) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});