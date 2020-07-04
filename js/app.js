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
// COUNTDOWN
$("#counter__info").countdown("2020/07/25", function (event) {
  $(this).html(
    event.strftime(`
  <h3>Website Cooming Soon</h3>
  <div id='clock'>
  <div><span>%w</span><span>Weeks</span></div>
  <div><span>%d</span><span>Days</span></div>
  <div><span>%H</span><span>Hr</span></div>
  <div><span>%M</span><span>Min</span></div>
  <div><span>%S</span><span>Sec</span></div></div>`)
  );
});
