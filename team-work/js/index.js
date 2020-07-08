// SCROLL DOWN
var scroll_down = document.querySelector('#scroll_down');
scroll_down.addEventListener('click', function() {
    console.log('SCROLL DOWN');
    $('html, body').animate({scrollTop: $('#end').offset().top}, 1000)
});

