$(function () {

  

  $('.popup').magnificPopup({
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


  $('.menu__link, .about__link').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 100;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });



  // let data = Array.from(document.querySelectorAll('.catalog__descr')),
  //   step = 4,
  //   item = 0;

  //   data.slice(step).forEach(e => e.style.display = 'none', $('.catalog__btn').display = 'none');

  // document.querySelector('.catalog__btn').addEventListener('click', function (e) {
  //   let tmp = data.slice(item);
  //   tmp.forEach(e => e.style.display = 'block');
  //   item += item;

  //   if (tmp.length < 20)
  //     this.remove();

  // });

  /*------------------------------------ */


  $('.catalog__btn').on('click', function () {
    $('.catalog__descr:nth-child(n+5)').slideToggle();
    $('.catalog__info').toggleClass('catalog__info--active');
  });


  // $('.about__link').on('click', function (event) {
  //   event.preventDefault();
  //   $($(this).attr('href')).scrollTo($('.catalog__item'));
  // });



//   var buttons = document.getElementsByClassName(".catalog__btn");
// var buttonsCount = buttons.length;
// for (var i = 0; i <= buttonsCount; i += 1) {
//     buttons[i].onclick = function(e) {
//       $('.catalog__descr:nth-child(n+5)').(this.id).slideToggle();
//     };
// }







  $('.catalog__inner, .reviews__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>'
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



document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger'); 
  const mobileMenu = document.querySelector('.menu__list'); 
  const bodyLock = document.querySelector('body');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu__list--active'); 
    if (mobileMenu.classList.contains('menu__list--active'))  { 
      burger.classList.add('burger--active'); 
      bodyLock.classList.add('lock');
    }
    else {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu__list--active');
      bodyLock.classList.remove('lock');
    }
  });
});
