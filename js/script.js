$(document).ready(function() {
  /* Owl Carousel */
  $('.service-owl').owlCarousel({
    margin: 5,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  $('.blog-owl').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true
  });

  /* FancyBox */
  $(document).ready(function() {
    $('[data-fancybox="video-fancy"]').fancybox({});
  });
});
