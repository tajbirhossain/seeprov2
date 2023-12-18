const accordion = document.querySelector(".accordion")
const accordionChild = accordion.querySelectorAll(".singleAccordion")


accordionChild.forEach((item, i) => {
    const accordionHeading = item.querySelector(".accordionHeading")
    const accordionText = item.querySelector("p")
    if (item.classList.contains("active")) {
        item.style = `height: ${accordionHeading.clientHeight + accordionText.clientHeight}px`
    } else {
        item.style = `height: ${accordionHeading.clientHeight}px`
    }
    accordionHeading.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active")
            item.style = `height: ${accordionHeading.clientHeight}px`
        } else {
            item.classList.add("active")
            item.style = `height: ${accordionHeading.clientHeight + accordionText.clientHeight}px`
        }

    })
})






const overlay = document.querySelector(".overlay")
const menuList = document.querySelector("header .container ul")


const menuToggle = () => {
    menuList.classList.add("active")
    overlay.classList.add("active")
}


overlay.addEventListener("click", () => {
    menuList.classList.remove("active")
    overlay.classList.remove("active")
})