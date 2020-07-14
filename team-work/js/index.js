// ?　SCROLL DOWN
var scroll_down = document.querySelector('#scroll_down');
scroll_down.addEventListener('click', function() {
    
    
    console.log('#banner: '+ $('#banner').offset().top);
    console.log('#philosophyN: '+ $('#philosophy').offset().top);

    var scroll_pos = $('#philosophy').offset().top;
    console.log('SCROLL DOWN: '+ scroll_pos);

    $('html, body').animate({ scrollTop:(scroll_pos) }, 1500);
});


