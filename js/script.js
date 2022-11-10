const menuButton = document.querySelector(".m-menu")
const menuButton2 = document.querySelector(".m-menu2")
const menu = document.querySelector(".head-span")
const menu2 = document.querySelector(".choice")
const all_products = document.querySelector("#all-products")
const giroscooters = document.querySelector("#giroscooter")

menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
});
menuButton2.addEventListener("click", () => {
    menu2.classList.toggle("is-open2");
});
