// 環境導覽
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    lazy: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 400,
        depth: 300,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: ".swiper-pagination",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return '<span class="pagination-text">' + ('0' + current).slice(-2) + '  /  ' + ('0' + total).slice(-2) + '</span>';
        }
    },
    loop: true,
    autoplay: {
        delay: 2000
    }

},
    $('.swiper-button-next-custom').click(function () {
        swiper.slideNext();
    }),
    $('.swiper-button-prev-custom').click(function () {
        swiper.slidePrev();
    })
);