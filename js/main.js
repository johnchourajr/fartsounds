// ---------------
// External Link Click
// ---------------
$(document.links).filter(function() {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');

// // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 7;
// var navbarHeight = $('nav').outerHeight();
//
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);
//
// function hasScrolled() {
//   var st = $(this).scrollTop();
//
//   // Make sure they scroll more than delta
//   if(Math.abs(lastScrollTop - st) <= delta)
//     return;
//
//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight){
//     // Scroll Down
//     $('nav').removeClass('nav-down').addClass('nav-up');
//     $('.sort-header').removeClass('sort-header__init').addClass('sort-header__move');
//   } else {
//     // Scroll Up
//     if(st + $(window).height() < $(document).height()) {
//       $('nav').removeClass('nav-up').addClass('nav-down');
//       $('.sort-header').removeClass('sort-header__move').addClass('sort-header__init');
//     }
//   }
//
//   lastScrollTop = st;
// }
//
// $(function() {
//   //caches a jQuery object containing the header element
//   var header = $("nav");
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//
//     if (scroll >= navbarHeight) {
//       header.removeClass('nav-max').addClass("nav-min");
//     } else {
//       header.removeClass("nav-min").addClass('nav-max');
//     }
//   });
// });
