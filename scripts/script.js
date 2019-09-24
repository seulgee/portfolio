$(window).scroll(function() {

  var upArrow = $('#up-arrow')
  if ($(this).scrollTop()>600)
   {
      upArrow.fadeIn(300);
      console.log('working')
   }
  else
   {
    upArrow.fadeOut(300);
   }
});