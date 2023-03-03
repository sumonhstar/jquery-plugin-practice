$(function(){
$(".nav-menu").hide();
$(".countup-menu").hide();
$(".student-menu").hide();
$(".lightbox-menu").hide();
$(".venobox-menu").hide();
$(".veno-video-menu").hide();
$(".student-des").hide();

$("#menu").click(function(){
    $(".nav-menu").slideToggle(700);
});
$("#menu").click(function(){
    $(".countup-menu").slideToggle(700);
});
$("#menu").click(function(){
    $(".student-menu").slideToggle(700);
});
$("#menu").click(function(){
    $(".lightbox-menu").slideToggle(700);
});
$("#menu").click(function(){
    $(".venobox-menu").slideToggle(700);
});
$("#menu").click(function(){
    $(".veno-video-menu").slideToggle(700);
});


$("#arrowBox-1").click(function(){
    $(".student-des-1").slideToggle();
});
$("#arrowBox-2").click(function(){
    $(".student-des-2").slideToggle();
});
$("#arrowBox-3").click(function(){
    $(".student-des-3").slideToggle();
});


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
});