$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});

$(document).ready(function(){
  $('.menu-btn').click(function(){
    $('.nav-item').toggleClass('show')
  });
});
