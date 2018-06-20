
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots: true,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
