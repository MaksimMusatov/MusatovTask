$(document).ready(function() {
  // SLIDER
  $(".carousel").carousel({
    interval: 4000
  });

  // BURGER BUTTON
  $(".mobile-trigger").on("click", function() {
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
      $("nav")
        .animate({ left: "-60%" })
        .removeClass("is-active");
      $("body").css("overflow", "visible");
    } else {
      $(this).toggleClass("is-active");
      $("nav")
        .animate({ left: "0" })
        .addClass("is-active");
      $("body").css("overflow", "hidden");
    }
  });

  // FANCYBOX GALLERY
  $(".fancybox").fancybox();

  // BACK TO TOP BUTTON
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $("#btn-top").fadeIn();
      } else {
        $("#btn-top").fadeOut();
      }
    });
    $("#btn-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });

  // POPUP
  $(".open-popup").magnificPopup({
    type: "inline",
    callbacks: {
      open: function() {
        $.magnificPopup.instance.close = function() {
          $.magnificPopup.proto.close.call(this);
        };
      }
    }
  });
});
