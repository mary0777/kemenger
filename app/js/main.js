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
 
  
   
});