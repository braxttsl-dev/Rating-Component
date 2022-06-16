let buttons = document.querySelectorAll(".btn-container #rating-btn")
let rating = document.querySelector("#rating")
let submit = document.querySelector("#submit")
let ratingCard = document.querySelector("#card-1")
let thankCard = document.querySelector("#card-2")

// This gets all of the buttons
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        document.querySelector(".rating-btn.active")?.classList.remove("active")
        event.currentTarget.classList.add("active")
        rating.textContent = event.currentTarget.textContent
    })
})

// This lets the submit button switch the classes of the cards
submit.addEventListener("click", event => {
    if (rating.textContent == "0") {
        return
    } else {
        ratingCard.classList.add("hide")
        thankCard.classList.remove("hide")
    }


})