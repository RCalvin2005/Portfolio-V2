window.onload = function() {

    // Add padding to ensure content not blocked by nav
    var navHeight = document.querySelector("nav").clientHeight;
    var buffer = document.querySelectorAll(".nav-buffer");
    buffer.forEach(function(buffer) {
        buffer.style.height = String(navHeight) + "px";
    })

    // Ensure each section fills viewport
    var vh = window.innerHeight;
    var container = document.querySelectorAll(".section-container");
    container.forEach(function(container) {
        if (container.id == "home_container")
        {
            container.style.minHeight = String(vh - navHeight) + "px";
        }
        else if (container.id != "contact_container")
        {
            container.style.minHeight = String(vh - 2 * navHeight) + "px";
        }
    })

    // Trigger event
    const loaded = new Event('loaded');
    document.dispatchEvent(loaded);

    document.querySelector("#loader").style.display = "none";

    const main = document.querySelector("main");
    main.style.transition = "opacity 1s";
    main.style.opacity = 1;
}