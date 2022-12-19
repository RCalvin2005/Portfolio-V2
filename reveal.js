// Scroll Reveal Animation
// Source: https://www.youtube.com/watch?v=AKNvTxWOdKw
const sr = ScrollReveal ({
    origin: "top",
    distance: "80px",
    duration: "2000",
    reset: "true"
})

document.addEventListener("loaded", function() {

    // Home
    sr.reveal("#home_heading", {})
    sr.reveal("#home_subheading", {delay: 200});
    sr.reveal("#home_text", {delay: 400});
    sr.reveal(".home_pic", {delay: 600});
    sr.reveal(".fa-play", {delay: 800});
    sr.reveal(".fa-square", {delay: 900});

    // About
    sr.reveal("#about_text", {});
    sr.reveal("#about_pic", {delay: 400});

    // Qualifications
    sr.reveal(".qualification_org", {});
    sr.reveal(".qualification_icon", {delay: 200});
    sr.reveal(".qualification_desc", {delay: 400});
    sr.reveal(".progress", {delay: 600});
    sr.reveal(".progress-bar", {delay: 650});

    // Skills
    sr.reveal(".skill_icon_pc", {interval: 200});
    sr.reveal(".skill_icon_mobile", {interval: 200});
    sr.reveal(".skill_name", {delay: 100, interval: 200});
    sr.reveal(".fa-star", {delay: 200, interval: 50});
    sr.reveal("#skills_credit", {delay: 1200});

    // Projects
    sr.reveal("#projects_carousel", {delay: 200});

    // Contact
    sr.reveal(".contact_icon", {interval: 200});
    sr.reveal(".contact_info", {delay: 150, interval: 200});
})


