var m = 2;
var _uid = 753739800 * m;
var _hash = 'd382e77.0d4969a0b42041029e70b1f7eec8deae';

var _mobile = false;

/**
 * carousel
 */
// max id not count !
function getNextActive(index, max) {
    var maxId = max;

    if (index == maxId) {
        return 0;
    } else {
        return ++index;
    }
}
;

// max id not count !
function getPrevActive(index, max) {
    var maxId = max;

    if (index == 0) {
        return maxId;
    } else {
        return --index;
    }
}
;


$(function () {

    $('#newsletter-button').click(function () {

        var email = $('#newsletter-email').val();

        if (email == '') {
            return;
        }

        var error = $('p.mail-error');
        error.css('display', 'none');

        var info = $('p.mail-info');
        info.css('display', 'none');

        $.post('/newsletter?email=' + email, function (data) {
            if (data == 'invalid') {
                error.html('Invalid e-mail address.');
                error.css('display', 'inline-block');
            } else if (data == 'ok') {
                $('#newsletter-container').empty();
                $('#newsletter-container').append('<p class="mail-ok">Thanks !</p>');
            } else {
                error.html('Unexpected error. Please try again.');
                error.css('display', 'inline-block');
            }
        });
    });

    $('#phone').html('8050');
    $('#email').html('aloha');
    $('#email').parent('a').attr('href', 'mailto:aloha@mojudrinks.com');
    $('#emailPressed').html('pressed');
    $('#emailPressed').parent('a').attr('href', 'mailto:pressed@mojudrinks.com')
    var date = new Date();
    $('#page-year').html(date.getFullYear());

    $('.menu-close').click(function () {
        $('nav.drop-menu').hide();
    });

    $('.menu-switch').click(function () {
        $('nav.drop-menu').show();
    });

    $('nav.drop-menu > .items a.item').click(function () {
        $('nav.drop-menu').hide();
    });

    if ($(window).width() <= 800) {
        _mobile = true;
    }

    $(window).resize(function () {
    });

    $('body').on('click', 'a.page-scroll', function (event) {
   
        var $anchor = $(this);
        var target = $anchor.attr('href').toString().replace('/', ''); 
        var top = $(target).offset().top;
        
        $('html, body').stop().animate({
            scrollTop: top
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
    });

    /*var wps = $('section.juice').waypoint({
     handler: function (direction) {
     
     var beetrootShown = false, carrotShown = false, cucumberShown = false;
     var _self = $(this.element);
     
     if (direction === 'down') {
     $('html, body').stop().animate({
     scrollTop: _self.offset().top - 70
     }, 300, 'easeInCubic', function () {
     
     if (_self.hasClass('beetroot') && !beetrootShown) {
     
     _self.find('.col-md-6.left').show('slide', {direction: 'left'}, 1000);
     _self.find('.col-md-6.right').show('slide', {direction: 'up'}, 1000);
     beetrootShown = true;
     
     } else if (_self.hasClass('carrot') && !carrotShown) {
     
     carrotShown = true;
     
     } else if (_self.hasClass('cucumber') && !cucumberShown) {
     
     cucumberShown = true;
     }
     });
     }
     
     }, offset: '70%'
     });*/

    /*var userFeed = new Instafeed({
     get: 'user',
     userId: parseInt(_uid),
     accessToken: _uid + '.' + _hash,
     limit: 8,
     resolution: 'standard_resolution',
     sortBy: 'random',
     template: '<a href="{{link}}" target="_blank"><img class="instagram_feed" src="{{image}}" /></a>'
     });
     
     //userFeed.run();
     */
});


// TODO - not working...
// Closes the Responsive Menu on Menu Item Click
//$('.navbar-collapse ul li a').click(function () {
//    $('.navbar-toggle:visible').click();
//});
