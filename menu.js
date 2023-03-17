const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// When I click the toggle tag, toggle a calss of open on the main tag
// If it's open make the toggle tag say closed
// If not make the toggle tag say menu
toggleTag.addEventListener("click", function () {
    // classList returns the CSS properties with same class name
    // To get the main section to open/move has to do with the look and feel - and that has to do with the CSS
    mainTag.classList.toggle("open");

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="assets/close.svg"> Close`
    } else {
        toggleTag.innerHTML = `<img src="assets/menu.svg"> Menu`
    }
}) 