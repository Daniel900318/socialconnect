

$(function () {

  $('header.desktop').hide();

  var num = 8;
  if (_mobile) {
    num = 4;
  }

  if ($(window).width() > 800) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('header.desktop').slideDown();
      }
      else {
        $('header.desktop').slideUp(); //hide(300, "swing");
      }
    });
  }

  var userFeed = new Instafeed({
    get: 'user',
    userId: parseInt(_uid),
    accessToken: _uid + '.' + _hash,
    limit: num,
    resolution: 'standard_resolution',
    sortBy: 'random',
    template: '<a href="{{link}}" target="_blank"><img class="instagram_feed" src="{{image}}" /></a>'
  });

  userFeed.run();

  $('.main-juice-left').click(function () {

    var juices = $('.mobile-juices').find('.main-juice');
    var hit = false;
    var activeIndex = 0;

    $.each(juices, function (index, value) {

      if ($(value).hasClass('active')) {
        activeIndex = index;
      }

      $(value).removeClass('active');
    });

    var prev = getPrevActive(activeIndex, 2);
    $(juices[prev]).addClass('active');

  });

  $('.main-juice-right').click(function () {

    var juices = $('.mobile-juices').find('.main-juice');
    var activeIndex = 0;

    $.each(juices, function (index, value) {

      if ($(value).hasClass('active')) {
        activeIndex = index;
      }

      $(value).removeClass('active');
    });

    var prev = getNextActive(activeIndex, 2); // max id not count !
    $(juices[prev]).addClass('active');

  });

  $('.made-left').click(function () {

    var elems = $('.made-tiles').find('.tile-wrapper');

    var activeIndex = 0;

    $.each(elems, function (index, value) {
      if ($(value).hasClass('active')) {
        activeIndex = index;
      }
      $(value).removeClass('active');
    });

    var prev = getPrevActive(activeIndex, 5);
    $(elems[prev]).addClass('active');
  });

  $('.made-right').click(function () {

    var elems = $('.made-tiles').find('.tile-wrapper');

    var activeIndex = 0;

    $.each(elems, function (index, value) {
      if ($(value).hasClass('active')) {
        activeIndex = index;
      }
      $(value).removeClass('active');
    });

    var prev = getNextActive(activeIndex, 5);
    $(elems[prev]).addClass('active');
  });
});