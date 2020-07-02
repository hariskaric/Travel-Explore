jQuery(document).scroll(function () {
  let navigation = jQuery("#navigation");
  let backToTop = jQuery("#back-top");

  if (jQuery(this).scrollTop() > jQuery(".carousel").height()) {
    if (!navigation.hasClass("solid-header")) {
      navigation.addClass("solid-header");
      backToTop.addClass("back-top");
    }
  } else {
    if (navigation.hasClass("solid-header")) {
      navigation.removeClass("solid-header");
      backToTop.removeClass("back-top");
    }
  }
});
window.onload = function () {
  lax.setup(); // init
  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);
};
// Preloader
jQuery(window).on("load", function () {
  preloader();
});
// Preloader Function
function preloader() {
  jQuery(".preloaderimg").fadeOut();
  jQuery(".preloader")
    .delay(200)
    .fadeOut("slow")
    .delay(200, function () {
      jQuery(this).remove();
    });
}
