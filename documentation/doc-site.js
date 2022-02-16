const menuToggler = document.querySelector(".menu-toggler")
const menuTogglerIcon = document.querySelector(".menu-toggler-icon")
const sideNavContainer = document.querySelector(".side-nav-container")
const sideNav = document.querySelector(".side-nav")

menuToggler.addEventListener("click", () => {
    sideNavContainer.classList.toggle("show-side-nav-container")
    sideNav.classList.toggle("show-side-nav")
    menuTogglerIcon.classList.toggle("menu-toggler-icon-transform")
})


// This if block will work on MODAL COMPONENT page
if(window.location.pathname === "/documentation/components/modal.html") {

    // creating references to modal elements
    const modal = document.querySelector(".modal")
    const openModalBtn = document.querySelector(".open-modal-btn")
    const closeModalBtns = document.querySelectorAll('.close-modal-btn')

    // When clicked on open modal button adds show class on modal to open modal
    openModalBtn.addEventListener("click", () => {
        modal.classList.add("show")
    })

    //  Close modal when clicked on close modal buttons (close icon or close button)
    closeModalBtns.forEach(closeModalBtn => {
        closeModalBtn.addEventListener("click", () => {
            modal.classList.remove("show")
        })
    });

    // Close modal when clicked outside the modal
    modal.addEventListener("click", (e) => {
        if(e.target == modal) {
            modal.classList.remove("show")
        }
    })
}


// This if block will worn on RATING COMPONENT page
if(window.location.pathname === "/documentation/components/rating.html") {
    const ratingLabels = document.querySelectorAll(".rating-label")
    const ratingInputs = document.querySelectorAll(".rating-input")
    const ratingOutput = document.querySelector(".rating-output")

    ratingLabels.forEach((label, index) => {
        label.addEventListener("click", () => {
            ratingOutput.innerHTML = `${ratingInputs[index].value} <i class="fas fa-star"></i>`
        })
    })
}

// This if block will work on TOAST COMPONENT page
if(window.location.pathname === "/documentation/components/toasts.html") {
    
    // Creating references to toast elements
    const openToastBtns = document.querySelectorAll(".open-toast-btn")
    const toasts = document.querySelectorAll(".toast")

    // Iterating the open modal buttons array
    openToastBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            const btnValue = btn.value

            toasts.forEach(toast => {

                if (toast.classList.contains(btnValue)){
                    toast.classList.add("show-toast")
                    setTimeout(() => toast.classList.remove("show-toast")
                        ,5000)
                } else {
                    toast.classList.remove("show-toast")
                }
            })
        })
    })
}