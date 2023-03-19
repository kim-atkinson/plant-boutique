// Pick all of the images and layer them based on the z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// Want to keep track of two things
let currentSlide = 0
let z = 1

// When slide area is clicked, change the slide based on z-index
slideArea.addEventListener("click", function () {
    currentSlide = currentSlide + 1

    if (currentSlide > images.length - 1) {
        currentSlide = 0
    }
    z = z + 1
    //  Remove the animation from the style for EVERY IMAGE
    images.forEach((image) => {
        image.style.animation = ""
    })

    // Pick the right image
    images[currentSlide].style.zIndex = z   
    images[currentSlide].style.animation = "fade 0.5s"
})


// When mouse goes over the slude area, the images will go in a random place
slideArea.addEventListener("mouseover", function () {
    images.forEach((image) => {
        const x = 25 * (Math.floor(Math.random() * 5)) - 50
        const y = 25 * (Math.floor(Math.random() * 5)) - 50

        image.style.transform = `translate(${x}px, ${y}px)`
    })
})

// When mouse moves away, put the images back. 
slideArea.addEventListener("mouseout", function () {
    images.forEach(image =>{
        image.style.transform = ""
    })
})





