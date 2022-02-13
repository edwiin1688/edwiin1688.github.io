// ?　SCROLL DOWN
var scroll_down = document.querySelector('#scroll_down');
scroll_down.addEventListener('click', function() {
    // console.log('#banner: '+ $('#banner').offset().top);
    // console.log('#philosophyN: '+ $('#philosophy').offset().top);
    // var scroll_pos = $('#philosophy').offset().top;
    // console.log('SCROLL DOWN: '+ scroll_pos);
    // $('html, body').animate({ scrollTop:(scroll_pos) }, 500);
});

function testScroll(ev){
    if(window.pageYOffset > 150){
        document.getElementById("scroll_down").style.display = "none";
    } else {
        document.getElementById("scroll_down").style.display = "block";
    }
}

window.onscroll = testScroll;
