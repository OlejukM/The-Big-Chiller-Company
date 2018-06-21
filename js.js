var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
});

window.onload = function () {
    document.querySelector('.bg-modal').style.display = 'flex';
};

document.getElementById('popup-close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('click-popup').addEventListener('click', function () {
    document.querySelector('.bg-modal-2').style.display = 'flex';
});
document.getElementById('popup-close-2').addEventListener('click', function () {
    document.querySelector('.bg-modal-2').style.display = 'none';
});


