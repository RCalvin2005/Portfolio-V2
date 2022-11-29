window.onload = function() {

    // Add padding to ensure content not blocked by nav
    var navHeight = document.querySelector("nav").clientHeight
    var main = document.querySelector("main")
    main.style.paddingTop = String(navHeight + 10) + "px";

}

// https://github.com/twbs/bootstrap/issues/1768