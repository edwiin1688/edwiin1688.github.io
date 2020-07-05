// 動態加入輪撥照片
var gt = document.querySelector('.guided_tour_wrapper');
guided_tour_data.forEach(x => {
    gt.innerHTML += `
    <div class="swiper-slide">
        <div class="card">
            <div class="card__img">
                <img src="${x.src}" alt="">
            </div>
            <div class="card__body">
                <h2 class="card__title">
                    ${x.text} <br>
                    <span>${x.subText}</span>
                </h2>
            </div>
        </div>
    </div>
    `;
});