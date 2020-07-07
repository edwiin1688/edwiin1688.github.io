// 首頁
$.getScript('./js/guided_tour_data.js', function () {
    var b = document.querySelector('#banner');
    b.innerHTML += `
                    <!-- Slider
                    Slider main container -->
                    <div class="swiper-container banner">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">

                            <!-- Slides -->
                            <div class="swiper-slide">
                                <video src="./video/video-01.mp4" autoplay muted loop></video>
                            </div>

                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>

                        <!-- If we need navigation buttons -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                        <!-- If we need scrollbar -->
                        <div class="swiper-scrollbar"></div>
                    </div>
                    `;

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
});



