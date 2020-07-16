// 首頁
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
    autoplay: 30000
});

$('.banner .swiper-button-next').hide();
$('.banner .swiper-button-prev').hide();


var mm = window.matchMedia("(max-width: 650px)");
mm.addListener(resizeWidth);
resizeWidth(mm);

function resizeWidth(pMatchMedia) {
    if (pMatchMedia.matches) {
        //小於650px時執行的js
        if ($('.banner').is(":visible")) {
            $('.banner').hide();
        }
    } else {
        //大於650px時執行的js
        if ($('.banner').is(":hidden")) {
            $('.banner').show();
        }
    }
}



