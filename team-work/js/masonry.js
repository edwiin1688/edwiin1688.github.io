$.getScript('./js/masonry-data.js', function () {

    var masonry = document.querySelector('#masonry');
    masonry.innerHTML += `
        <h1 class="d-flex justify-content-center">瀑布流</h1>
        <div class="masonry">
            <!-- 動態放入瀑布流照片 -->
        </div>
        `;

    // 動態加入瀑布流
    var m = document.querySelector('.masonry');
    masonry_data.forEach(x => {
        m.innerHTML += `
        <div class="item">
            ${x.text}
            <img
                src="${x.src}">
        </div>
        `;
    });

});


