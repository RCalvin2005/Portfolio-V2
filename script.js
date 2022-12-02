window.onload = function() {

    // Add padding to ensure content not blocked by nav
    var navHeight = document.querySelector("nav").clientHeight
    var buffer = document.querySelectorAll(".nav-buffer")
    buffer.forEach(function(buffer) {
        buffer.style.height = String(navHeight) + "px";
    })

    // Ensure each section fills viewport
    var vh = window.innerHeight
    var container = document.querySelectorAll(".section-container")
    container.forEach(function(container) {
        if (container.id == "home_container")
        {
            container.style.minHeight = String(vh - navHeight) + "px";
        }
        else
        {
            container.style.minHeight = String(vh - 2 * navHeight) + "px";
        }
    })

    // Ensures carousel items fill viewport
    var projectsHeading = document.querySelector("#projects_heading");
    var style = getComputedStyle(projectsHeading);
    var headingHeight = projectsHeading.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom) 
    var carouselItem = document.querySelector(".carousel-item");
    carouselItem.style.height = String(vh - navHeight - headingHeight) + "px";

}

// https://github.com/twbs/bootstrap/issues/1768