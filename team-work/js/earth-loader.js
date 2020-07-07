$.getScript('./js/earth-loader-svg.js');
var b = document.querySelector('body');
        b.innerHTML += `
        <div class="loading-mask" data-role="loader">
            <div class="wrapper">
            </div>
            <div class="text">
                <span class="letter">L</span>
                <span class="letter">O</span>
                <span class="letter">A</span>
                <span class="letter">D</span>
                <span class="letter">I</span>
                <span class="letter">N</span>
                <span class="letter">G</span>
            </div>
        </div>
        `;

    // earth-loader
    $(window).load(function () {
        $(".loading-mask").fadeOut(1500);
    });


