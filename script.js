<<<<<<< HEAD
function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add("active");

    // tiny visual feedback
    activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
=======
function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add("active");

    // tiny visual feedback
    activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
>>>>>>> 4c5dc069d09b2a46e9cad9cba296c6e32c8f7c5d
}