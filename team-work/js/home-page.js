var burger = document.querySelector(".hamburglar")

burger.onclick = function () {
    if (burger.classList.contains("is-open")) {
        burger.classList.remove("is-open")
        burger.classList.add("is-closed")
    } else {
        burger.classList.remove("is-closed")
        burger.classList.add("is-open")
    }
}

var burger_top = document.querySelector(".burger-bun-top")
var burger_filling = document.querySelector(".burger-filling")
var burger_bot = document.querySelector(".burger-bun-bot")
var slider_nav = document.querySelector(".slider-nav")
burger.onmouseover = function () {
    slider_nav.classList.add("opacity")
}
burger.onmouseout = function () {
    slider_nav.classList.remove("opacity")
}

var burger_box = document.querySelector(".burger-box")
var menu_container = document.querySelector(".menu-container")
burger_box.onclick = function () {
    if (menu_container.classList.contains("act")) {
        menu_container.classList.remove("act")
    } else {
        menu_container.classList.add("act")
    }
}