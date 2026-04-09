const ham = document.querySelector(".ham")
const links = document.querySelector(".links")

ham.addEventListener("click",function () {
    links.classList.toggle("hidden")
})