const menuButtonOpen = document.getElementById("menu-button-open")
const menuButtonClose = document.getElementById("menu-button-close")
const sectionNav = document.getElementById("section-nav")
const body = document.getElementById("body")

menuButtonOpen.addEventListener("click", () => {
    sectionNav.classList.add("aparicion")
    body.style.opacity = "0.7"
})

menuButtonClose.addEventListener("click", () => {
    sectionNav.classList.remove("aparicion")
    body.style.opacity = "1"
})