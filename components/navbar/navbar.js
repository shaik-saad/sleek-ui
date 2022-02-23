const navbarTogglerBtn = document.querySelector(".navbar-toggler")
const collapseSection = document.querySelector(".collapse-section")
const collapseCloseBtn = document.querySelector(".collapse-close-btn")

navbarTogglerBtn.addEventListener("click", () => {
    collapseSection.classList.add("show-collapse-section")
})

collapseCloseBtn.addEventListener('click', () => {
    collapseSection.classList.remove("show-collapse-section")
})