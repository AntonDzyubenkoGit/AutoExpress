// $('.carousel__item').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });

$(function () {
  $(".carousel__inner").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // variableWidth: true,
        },
      },
    ],
  });

  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
});
