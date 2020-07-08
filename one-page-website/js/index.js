var swiper = new Swiper('.bannr', {
    spaceBetween: 30,
    effect: 'fade',
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
        delay: 2000
    }
});

var join = document.querySelector('.join');
join.addEventListener('click', function() {
    console.log('click');
});

parallaxInstance1 = new Parallax( document.getElementById( "parallax" ) );