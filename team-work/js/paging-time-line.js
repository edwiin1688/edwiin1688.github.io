(function () {

    'use strict';
    
    // define variables
    var items = document.querySelectorAll(".timeline li");
    var btn = document.querySelector("#friday");
    var btn2 = document.querySelector("#holiday");
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();







  (function () {

'use strict';

// define variables
var pics = document.querySelectorAll(".move-pic");

// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport(el) {
var rect = el.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

function callbackFunc2() {
for (var i = 0; i < pics.length; i++) {
  if (isElementInViewport(pics[i])) {
    pics[i].classList.add("in-view");
  }
}
}

// listen for events
window.addEventListener("load", callbackFunc2);
window.addEventListener("resize", callbackFunc2);
window.addEventListener("scroll", callbackFunc2);

})();