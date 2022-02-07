$(document).ready(function() {

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

   //scroll to top

   $('.to-top').click(function () {
      $('html, body').animate({
         scrollTop: $('#top-anchor').eq(0).offset().top
      }, 400);
      console.log('hi')
   });


   //landing page preview images hover interactions

   var design = $('#image-design')
   var tattoo = $('#image-tattoo')

   design.hover(function(){

      $( this ).toggleClass("col-2-5 col-4")
      tattoo.toggleClass("col-2-5 col-1")
      console.log('design hover end func')
      
   })

   tattoo.hover(function(){
      
      $( this ).toggleClass("col-2-5 col-4")
      design.toggleClass("col-2-5 col-1")
      console.log('tattoo hover end func')
      
   })

//    $(window).resize(function() {
//       if (window.matchMedia('(max-width: 786px)').matches) {
//           // functionality for screens smaller than 1200px

//           $("#top-left").toggleClass("col-2-5 col-4")
//           $("#top-right").toggleClass("col-2-5 col-1")

//           $("#subheader").toggleClass("col-1 col-5")
//           $("#main-content").toggleClass("col-4 col-5")
//       }
//   });

//   $(window).resize(function() {
//    if (window.matchMedia('(max-width: 786px)').matches) {
//        // functionality for screens smaller than 1200px

//        $("#top-left").removeClass("col-2-5").addClass("col-4")
//        $("#top-right").removeClass("col-1").addClass("col-1")

//        $("#subheader").removeClass("col-1").addClass("col-5")
//        $("#main-content").removeClass("col-4").addClass("col-5")
//    }
// });

})

