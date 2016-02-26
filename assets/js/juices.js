$(function () {
  
  if ($(window).width() > 800) {
    $('header.desktop').show();
  }
  
  var userFeed = new Instafeed({
        get: 'user',
        userId: parseInt(_uid),
        accessToken: _uid + '.' + _hash,
        limit: 4,
        resolution: 'standard_resolution',
        sortBy: 'random',
        template: '<a href="{{link}}" target="_blank"><img class="instagram_feed" src="{{image}}" /></a>'
    });
   
  userFeed.run();    
  
  
  $('.click-green').click(function() {
    $('#green-juice-wrapper').addClass('active');
    $('#carrot-juice-wrapper').removeClass('active');
    $('#beetroot-juice-wrapper').removeClass('active');
  });
  
  $('.click-carrot').click(function() {
    $('#carrot-juice-wrapper').addClass('active');
    $('#green-juice-wrapper').removeClass('active');
    $('#beetroot-juice-wrapper').removeClass('active');
  });
  
  $('.click-beetroot').click(function() {
    $('#beetroot-juice-wrapper').addClass('active');
    $('#carrot-juice-wrapper').removeClass('active');
    $('#green-juice-wrapper').removeClass('active');
  });
});


  $('.browse-left').click( function () {
    
    var juices = $('#juices-browser').find('.wrapper');
    var hit = false;
    var activeIndex = 0;
    
    $.each(juices, function( index, value ) {
      
      if ($(value).hasClass('active')) {
        activeIndex = index;
      }
      
      $(value).removeClass('active');
    });
    
    var prev = getPrevActive(activeIndex, 2);
    $(juices[prev]).addClass('active');
    
  });
  
   $('.browse-right').click( function () {
    
    var juices = $('#juices-browser').find('.wrapper');
    var hit = false;
    var activeIndex = 0;
    
    $.each(juices, function( index, value ) {
      
      if ($(value).hasClass('active')) {
        activeIndex = index;
      }
      
      $(value).removeClass('active');
    });
    
    var prev = getNextActive(activeIndex, 2);
    $(juices[prev]).addClass('active');
    
  });