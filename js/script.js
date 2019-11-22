$(document).ready(function() {
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
});
