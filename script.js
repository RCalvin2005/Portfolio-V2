window.onload = function() {

    // Add padding to ensure content not blocked by nav
    var navHeight = document.querySelector("nav").clientHeight
    var main = document.querySelector("main")
    main.style.paddingTop = String(navHeight) + "px";

    // Ensure each section fills viewport
    var vh = window.innerHeight
    var sections = document.querySelectorAll("section")
    sections.forEach(function(section) {
        section.style.minHeight = String(vh - navHeight) + "px";
    })
}

// https://github.com/twbs/bootstrap/issues/1768