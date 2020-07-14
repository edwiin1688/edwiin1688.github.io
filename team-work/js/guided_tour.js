// 環境導覽
var swiper = new Swiper(".guided_tour", {
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

// RWD
var mm = window.matchMedia("(max-width: 540px)");
mm.addListener(resizeWidth);
resizeWidth(mm);

function resizeWidth(pMatchMedia) {
    if (pMatchMedia.matches) {
        //小於540px時執行的js
        $('#philosophy .bp_title').each(function(index,item){
            if($(item).hasClass('pc_title_font_size'))
            {
                $(item).removeClass('pc_title_font_size');
            }
            if(!$(item).hasClass('mobile_title_font_size'))
            {
                $(item).addClass('mobile_title_font_size');
            }
        });

        $('#philosophy .bp_text').each(function(index,item){
            if($(item).hasClass('pc_content_font_size'))
            {
                $(item).removeClass('pc_content_font_size');
            }
            if(!$(item).hasClass('mobile_content_font_size'))
            {
                $(item).addClass('mobile_content_font_size');
            }
        });
    } else {
        //大於540px時執行的js
        $('#philosophy .bp_title').each(function(index,item){
            if(!$(item).hasClass('pc_title_font_size'))
            {
                $(item).addClass('pc_title_font_size');
            }
            if($(item).hasClass('mobile_title_font_size'))
            {
                $(item).removeClass('mobile_title_font_size');
            }
        });

        $('#philosophy .bp_text').each(function(index,item){
            if(!$(item).hasClass('pc_content_font_size'))
            {
                $(item).addClass('pc_content_font_size');
            }
            if($(item).hasClass('mobile_content_font_size'))
            {
                $(item).removeClass('mobile_content_font_size');
            }
        });
    }
}