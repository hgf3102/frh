$(window).scroll(function() {
    $("#topBar").css("background-color","#2656a6");
    $("#topBar").css("position","fixed");
    if(scrollTop() == true){
        $("#topBar").css("background-color","rgba(0, 0, 0, 0)");    
        $('#topBar').css("border-bottom","0");
        $("#topBar").css("position","absolute");
    }
});
function scrollTop() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop == 0) {
        return true;
    } else {
        return false;
    }
}
$(document).ready(function(){
    $('.mMenu').on('click', function(){
        $('.mobileNav').fadeToggle(500);
    });
    $('.mMenuClose').on('click', function(){
        $('.mobileNav').fadeToggle(500); 
    });
});
function closeMenu() {
    $('.mobileNav').fadeToggle(500); 
}
function moveScroll() {
    var offset = $("#price").offset();
    $("html, body").animate({scrollTop: offset.top},400); 
}