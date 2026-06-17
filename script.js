function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add("active");

    // tiny visual feedback
    activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
}