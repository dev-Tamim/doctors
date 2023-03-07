$('.doctor_main').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },]},
      )

  $(window).scroll(function(){
    var scrolling=$(this).scrollTop()

    if (scrolling > 20) {
      $(".nav_menu").addClass("bg")
    }else{
      $(".nav_menu").removeClass("bg")
    }
    if (scrolling > 20) {
      $(".back_to_top").fadeIn()
    }else{
      $(".back_to_top").fadeOut()
    }
  })

  $(".back_to_top").click(function(){
    $("html,body").animate({
      scrollTop:"0px"
    })
  })
  new VenoBox({
    selector: ".venobox"
});
$(".close").click(function(){
  $(".side_menu").toggleClass("side")
})
