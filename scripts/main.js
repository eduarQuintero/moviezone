const menuButtonOpen = document.getElementById("menu-button-open")
const menuButtonClose = document.getElementById("menu-button-close")
const sectionNav = document.getElementById("section-nav")

// SHOW MENU BAR
menuButtonOpen.addEventListener("click", () => {
    sectionNav.classList.add("aparicion")
})

// HIDE MENU BAR
menuButtonClose.addEventListener("click", () => {
    sectionNav.classList.remove("aparicion")
})