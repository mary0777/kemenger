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


  $('.catalog__btn').on('click', function () {
    $('.catalog__descr:nth-child(n+5)').slideToggle();
    $('.catalog__info').toggleClass('catalog__info--active');
  });

  $('.catalog__inner, .reviews__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ],
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
    if (mobileMenu.classList.contains('menu__list--active')) { 
      burger.classList.add('burger--active'); 
      bodyLock.classList.add('lock');
    }
    else {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu__list--active');
      bodyLock.classList.remove('lock');
    }
  });

  $('.menu__link').click(function () {
    burger.classList.remove('burger--active');
    $('.menu__list').removeClass('menu__list--active');
    $('body').removeClass('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu__list--active');
      bodyLock.classList.remove('lock');
    }
  });
});


