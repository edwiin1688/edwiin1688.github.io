var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: 3000
});

var v = document.getElementsByTagName("video")[0];

v.addEventListener("canplay", function () {
    mySwiper.stopAutoplay();
}, true);

v.addEventListener("ended", function () {
    mySwiper.startAutoplay();
}, true);