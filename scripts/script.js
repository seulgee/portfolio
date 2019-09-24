$(window).scroll(function() {

   var upArrow = $('#up-arrow')
   var filter = $('.button-group-mobile')
   var toTop = $('.to-top')

  if ($(this).scrollTop()>600)
   {
      upArrow.fadeIn(300);
      console.log('working')
   }
  else
   {
    upArrow.fadeOut(300);
   }

   if (toTop.is(":visible")) {
      if ($(this).scrollTop()>30)
         {
            filter.fadeOut(200);
            console.log('working')
         }
      else
         {
         filter.fadeIn(200);
         }
   } else {}
});