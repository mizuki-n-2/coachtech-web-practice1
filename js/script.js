$(function () {
  $('a[href^="#"]').on("click", function () {
    var adjust = 0;
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  $('#hamburger').on("click", function () {
    if ($(this).hasClass('open')) {
      $('.menu').slideUp();
      $(this).removeClass('open');
    } else {
      $('.menu').slideDown();
      $(this).addClass('open');
    }
    return false;
  });
  $('.menu a').on('click', function () {
    $('.menu').slideUp();
    $('#hamburger').removeClass('open');
    return false;
  });
});