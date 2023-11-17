const menuButtonOpen = document.getElementById("menu-button-open")
const menuButtonClose = document.getElementById("menu-button-close")
const sectionNav = document.getElementById("section-nav")

menuButtonOpen.addEventListener("click", () => {
    sectionNav.style.display = "block"
})

menuButtonClose.addEventListener("click", () => {
    sectionNav.style.display = "none"
})