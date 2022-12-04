// Scroll Reveal Animation
// Source: https://www.youtube.com/watch?v=AKNvTxWOdKw
const sr = ScrollReveal ({
    origin: "top",
    distance: "80px",
    duration: "2000",
    reset: "true"
})

const main = document.querySelector("main")
if (main.style.opactity != "0")
{
    // Home
    sr.reveal("#home_heading", {});
    sr.reveal("#home_subheading", {delay: 200});
    sr.reveal("#home_text", {delay: 400});
    sr.reveal(".home_pic", {delay: 600});
    sr.reveal(".fa-play", {delay: 800});
    sr.reveal(".fa-square", {delay: 900});

    // About
    sr.reveal("#about_heading", {});
    sr.reveal("#about_text", {delay: 200});
    sr.reveal("#about_pic", {delay: 400});

    // Qualifications
    sr.reveal("#qualifications_heading", {});
    sr.reveal(".qualification_org", {delay: 200});
    sr.reveal(".qualification_icon", {delay: 400});
    sr.reveal(".qualification_desc", {delay: 600});
    sr.reveal(".progress", {delay: 800});
    sr.reveal(".progress-bar", {delay: 850});

    // Skills
    sr.reveal("#skills_heading", {});
    sr.reveal(".skill_icon", {delay: 200, interval: 200});
    sr.reveal(".skill_name", {delay: 300, interval: 200});
    sr.reveal(".fa-star", {delay: 400, interval: 50});
    sr.reveal("#skills_credit", {delay: 1400});

    // Projects
    sr.reveal("#projects_heading", {});
    sr.reveal("#projects_carousel", {delay: 300});

    // Contact
    sr.reveal("#contact_heading", {});
    sr.reveal(".contact_icon", {delay: 200, interval: 200});
    sr.reveal(".contact_info", {delay: 350, interval: 200});

}
