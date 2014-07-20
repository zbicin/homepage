$(document).ready(function () {
  if(!window.navigator.userAgent.match(/(iPod|iPhone|iPad|Android|IEMobile)/)) {
    var linksToHandle = $("a[href^='#']");

    linksToHandle.click(function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }
});