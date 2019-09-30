$(function() {
    $('#scroll').click(function() {
        var speed = 400;
        $('body,html').animate({scrollTop:0}, speed, 'swing');
        return false;
    });

    $('.menu-trigger').click(function() {
        $(this).toggleClass("active");
        $(this).next().toggleClass("onanimation");
        $('ul li').hide();
        $('ul li').each(function(i) {
            $(this).delay(80 * i).fadeIn(150);
        });
        return false;
    });
});