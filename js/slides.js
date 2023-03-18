// Pick all of the images and layer them based on the z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// Want to keep track of two things
let currentSlide = 0
let z = 1

// When slide area is clicked, change the slide based on z-index
slideArea.addEventListener("click", function () {
    currentSlide = currentSlide + 1
    z = z + 1

    // Pick the right image
    images[currentSlide].style.zIndex = z
})