$(document).ready(function(){
    var timeout = 2500;
    $("html").animate({ opacity: 1}, timeout);
    $('nav').slideDown(timeout);
    $('footer').slideDown(timeout);
    $('.menu-items li').fadeIn(timeout * 1.5).css("display","inline-block");
});