$("#hamburger, .menuItem").click(function() {
  $(".content").toggleClass("open");
  $("#hamburger").toggleClass("menuOpened");
});

$("#contact").on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: ($('#footer').offset().top)
  }, 700); // <- czas w jakim wykonuje się animacja: 700 milisekund
});

$("#goTop, .button").on("click", function(event) {
  $("html, body").animate({
    scrollTop:
    0}, "fast");
});

window.onscroll = function() {
  scroll()
};

function scroll() {
  if ($(window).width() > 550) {
    $("#goTop").css("display", "none");
  } else {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#goTop").css("display", "block");
    } else {
      $("#goTop").css("display", "none");
    }
  }
}

$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  settings: {
    arrows: true,
  }
});
