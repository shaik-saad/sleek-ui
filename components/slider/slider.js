const rangeSlider = document.querySelector(".range-slider")
const currentValue = document.querySelector(".current-value")

rangeSlider.addEventListener("input", () => {
    currentValue.value = rangeSlider.value
})

currentValue.addEventListener('input', () => {
    rangeSlider.value = currentValue.value
})