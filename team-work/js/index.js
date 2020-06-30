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
    autoplay: 3000
});

$('.swiper-button-next').hide();
$('.swiper-button-prev').hide();



