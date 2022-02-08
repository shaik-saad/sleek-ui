const ratingLabels = document.querySelectorAll(".rating-label")
const ratingInputs = document.querySelectorAll(".rating-input")
const ratingOutput = document.querySelector(".rating-output")

ratingLabels.forEach((label, index) => {
    label.addEventListener("click", () => {
        ratingOutput.innerHTML = `${ratingInputs[index].value} <i class="fas fa-star"></i>`
    })
})