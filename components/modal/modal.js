const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".open-modal-btn")
const closeModalBtns = document.querySelectorAll('.close-modal-btn')

openModalBtn.addEventListener("click", () => {
    modal.classList.add("show")
})

closeModalBtns.forEach(closeModalBtn => {
    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("show")
    })
});

modal.addEventListener("click", (e) => {
    if(e.target == modal) {
        modal.classList.remove("show")
    }
})