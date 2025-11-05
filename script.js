// ========== Dark Mode Toggle ==========
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const rightDiv = document.getElementById("right");
const modalContent = document.querySelector(".modal-content");

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    rightDiv.classList.toggle("dark-mode");
    modalContent.classList.toggle("dark-mode");

    // Change icon between moon and sun
    if (darkModeToggle.classList.contains("fa-moon")) {
        darkModeToggle.classList.remove("fa-moon");
        darkModeToggle.classList.add("fa-sun");
    } else {
        darkModeToggle.classList.remove("fa-sun");
        darkModeToggle.classList.add("fa-moon");
    }
});

// ========== Download Resume ==========
const downloadResume = document.getElementById("downloadResume");
downloadResume.addEventListener("click", () => {
    window.open("AnjaliSingh.pdf", "_blank");
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// Profile modal
const profile = document.getElementById("profile");
const modal = document.getElementById("profileModal");
const closeBtn = document.querySelector(".close-btn");

profile.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



