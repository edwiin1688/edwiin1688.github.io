var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 5000
    }
});

var v = document.getElementsByTagName("video")[0];

v.addEventListener("canplay", function () {
    swiper.stopAutoplay();
}, true);

v.addEventListener("ended", function () {
    swiper.startAutoplay();
}, true);