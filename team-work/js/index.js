// SCROLL DOWN
var scroll_down = document.querySelector('#scroll_down');
scroll_down.addEventListener('click', function() {
    console.log('SCROLL DOWN');
    $('html, body').animate({scrollTop: $('#end').offset().top}, 1000)
});

var mm = window.matchMedia("(max-width: 650px)");
mm.addListener(resizeWidth);
resizeWidth(mm);

function resizeWidth(pMatchMedia){
  if (pMatchMedia.matches) {
    //小於650px時執行的js
    if ($('.banner').is(":visible")){
        $('.banner').hide();
        console.log('hide 大於650px時執行的js');
    }
    console.log('小於650px時執行的js');
  }else {
    //大於650px時執行的js
    if ($('.banner').is(":hidden")){
        $('.banner').show();
        console.log('show 大於650px時執行的js');
    }
    
    console.log('大於650px時執行的js');
  }
}
