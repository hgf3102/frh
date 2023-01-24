$(".question").click(function() {
    $(this).next(".answer").stop().slideToggle(500);
    $(this).next(".answer").siblings(".answer").slideUp(450);
    $(this).toggleClass('on').siblings().removeClass('on');
});