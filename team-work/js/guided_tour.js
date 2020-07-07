// 環境導覽(輪撥效果)
$.getScript('./js/guided_tour_data.js', function () {
    // do something...
    var b = document.querySelector('#guided_tour');
    b.innerHTML += `
                    <h1 class="default_bg d-flex justify-content-center">環境導覽</h1>
                    <!-- Slider
                    Slider main container -->
                    <div class="swiper-container guided_tour">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper guided_tour_wrapper">
                            <!-- 動態加入 Slides 照片-->
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


    // 動態加入輪撥照片
    var gtw = document.querySelector('.guided_tour_wrapper');
    guided_tour_data.forEach(x => {
        gtw.innerHTML += `
                        <div class="swiper-slide">
                            <div class="card">
                                <div class="card__img">
                                    <img src="${x.src}" alt="">
                                </div>
                                <div class="card__body">
                                    <h2 class="card__title default_bg">
                                        ${x.text} <br>
                                        <span>${x.subText}</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        `;
    });

    // 導覽
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
});
