var swiper_banner = new Swiper('.banner', {
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

$('.banner .swiper-button-next').hide();
$('.banner .swiper-button-prev').hide();

var swiper_guided_tour = new Swiper('.guided_tour', {
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows: true
    },
    loop: true,
    autoplay: {
        delay: 2000
    }
});

// 快捷 ICON
var join = document.querySelector('#quick-icon');
join.addEventListener('click', function() {
    console.log('快捷 ICON');
    $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000)
});

// SCROLL DOWN
var scroll_down = document.querySelector('#scroll_down');
scroll_down.addEventListener('click', function() {
    console.log('SCROLL DOWN');
    $('html, body').animate({scrollTop: $('#business-philosophy').offset().top}, 1000)
});