import "bootstrap";
import '@fortawesome/fontawesome-free/js/all'

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

var menuToggle = document.getElementById("menuToggle");
var scrollHeight = 100; // make navbar colored/hidden beyond this
var sm = 768; // small viewport width
var xs = 576; // medium viewport width

// reset iGEM
if (window.location.href.includes("igem.org")) {
  var ids = ["HQ_page", "content", "bodyContent", "mw-content-text"];
  for (var i = 0; i < ids.length; i++)
    document.querySelector("#" + ids[i]).removeAttribute("id");
  var classes = ["mw-content-ltr"];
  for (var i = 0; i < classes.length; i++) {
    var elements = document.querySelectorAll("." + classes[i]);
    for (var j = 0; j < elements.length; j++) {
      elements[j].classList.remove(classes[i]);
    }
  }
}

$("#menuSwitch").click(function () {
  $("#main-nav").toggleClass("menu-open");

  if ($(".navbar").hasClass("nav-colored")) {
    $(".navbar").removeClass("nav-colored");
  } else if ($(window).scrollTop() > scrollHeight) {
    $(".navbar").addClass("nav-colored");
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > scrollHeight) {
    if (!$("#main-nav").hasClass("menu-open")) {
      $(".navbar").addClass("nav-colored");
    }
  } else {
    $(".navbar").removeClass("nav-colored");
  }
});

// close navbar on escape
$(document).keyup(function (e) {
  if (e.keyCode == 27 && $("#main-nav").hasClass("menu-open")) {
    // escape key maps to keycode `27`
    $("#main-nav").removeClass("menu-open");
    $(".navbar").removeClass("desktop-menu");
  }
});

// navbar show on hover
$("#nav-headings li").hover(
  // handler in
  function () {
    $("#nav-headings li").each(function () {
      $(this).removeClass("active");
      $(this).addClass("inactive");
    });

    $(this).removeClass("inactive");
    $(this).addClass("active");

    var id = $(this).find("a").attr("id");

    $("#nav-items .tab-pane").each(function () {
      $(this).removeClass("active");
    });

    var tab_name = id.split("-")[0];
    $("#" + tab_name + "-pane").addClass("active");
  },
  // handler out - nothing
  function () {}
);

// when menu checkbox status changes
$("label[for='menuToggle']").click(function () {
  // close submenus
  $("#nav-headings li").each(function () {
    $(this).removeClass("active");
    $(this).removeClass("inactive");
  });

  $("#nav-items .tab-pane").each(function () {
    $(this).removeClass("active");
  });

  // if menu has been opened, make navbar transparent
  if (!$("#menuToggle").is(":checked")) {
    $(".navbar").addClass("nav-transparent");
    $(".navbar").addClass("desktop-menu");
    $(".navbar").removeClass("nav-colored");
  } else {
    $(".navbar").removeClass("desktop-menu");
    if (
      document.body.scrollTop >= scrollHeight ||
      document.documentElement.scrollTop >= scrollHeight
    ) {
      $(".navbar").removeClass("nav-transparent");
      $(".navbar").addClass("nav-colored");
    }
  }
});

$("#desktop-nav #close-label p").click(function () {
  $("#menuToggle").prop("checked", false);
  $(".navbar").removeClass("desktop-menu");
});

// show/hide nav on mobile
$(".nav-heading").on("click", function () {
  if (getWidth() <= sm) {
    if ($(this).siblings("ul").css("display") === "none") {
      $("#menuContent ul").slideUp();
      $(this).siblings("ul").slideDown();
    } else {
      $("#menuContent ul").slideUp();
    }
  }
});

$("#menuSwitch").on("click", function () {
  if (getWidth() <= sm) {
    $("#menuContent ul").slideUp();
  }
});

$("#close-label p, #menuSwitch").hover(
  // handler in
  function () {
    $("#menuSwitch").addClass("hover");
    $("#close-label p").addClass("hover");
  },
  // handler out
  function () {
    $("#menuSwitch").removeClass("hover");
    $("#close-label p").removeClass("hover");
  }
);

// show/hide footer on mobile
$(".footer-heading").on("click", function () {
  if (getWidth() <= xs) {
    if ($(this).siblings("ul").css("display") === "none") {
      $("#footerNav ul").slideUp();
      $(this).siblings("ul").slideDown();
    } else {
      $("#footerNav ul").slideUp();
    }
  }
});

// dark mode
$('label[for="themeSwitchInput"]').click(function() {
  if ($("#themeSwitchInput").is(":checked")) {
      $('body').addClass('dark');
  }
  else {
      $('body').removeClass('dark');
  }
}); 