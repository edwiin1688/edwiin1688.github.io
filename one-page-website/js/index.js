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

// ?　回首頁
var top = document.querySelector('#top');
top.addEventListener('click', function() {
    console.log('goto TOP');

    jump('');
});

function jump(h){
    var url = location.href;               //Save down the URL without hash.
    location.href = "#"+h;                 //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}
