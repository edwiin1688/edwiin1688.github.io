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
join.addEventListener('click', function () {
    console.log('click');
});

// ?　回首頁
var top = document.querySelector('#top');
top.addEventListener('click', function (e) {
    if (e.target.id == 'top') {
        console.log('goto TOP');

        jump('');
    }
});

function jump(h) {
    var url = location.href;               //Save down the URL without hash.
    location.href = "#" + h;                 //Go to the target element.
    history.replaceState(null, null, url);   //Don't like hashes. Changing it back.
}

// ! parallax.js
// 新增 data-depth="0.2"
// var parallaxInstance1 = new Parallax(document.getElementById("parallax1"));
// var parallaxInstance2 = new Parallax(document.getElementById("parallax2"));
// var parallaxInstance3 = new Parallax(document.getElementById("parallax3"));