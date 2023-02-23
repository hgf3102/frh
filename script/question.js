$(".question").click(function() {
    $(this).next(".a").stop().slideToggle(500);
    $(this).next(".a").siblings(".a").slideUp(450);
    $(this).toggleClass('on').siblings().removeClass('on');
});