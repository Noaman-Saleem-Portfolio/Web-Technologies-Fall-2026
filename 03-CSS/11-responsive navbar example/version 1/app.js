let items = document.querySelector("nav .links")
let ham = document.querySelector(".ham")
// let ham = document.getElementsByClassName("ham")
console.log(ham);
console.log(items);


ham.addEventListener("click", function (){
    console.log("Laga oay");
    
    items.classList.toggle("hidden")
})