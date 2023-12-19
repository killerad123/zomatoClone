const navList = document.querySelector(".nav-list")
const menuIcon = document.querySelector(".menu-icon")
const menuClose = document.querySelector("#close")
menuIcon.addEventListener("click",()=>{
    navList.classList.toggle("active")   
})
menuClose.addEventListener("click",()=>{
    navList.classList.toggle("active")   
})
