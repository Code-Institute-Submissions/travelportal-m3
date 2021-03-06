$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
    
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    slideSpeed: 300,
    paginationSpeed: 500,
    items : 99,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    center: false,
    nav:true,
    loop:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
      0:{ items:1 },
      600:{ items:3 },
      992:{ items:4 }
    }
    
    });
  
});