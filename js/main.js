// $('.carousel__item').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });

$(function () {
  $(".carousel__inner").slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
