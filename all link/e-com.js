const wrapper = document.querySelector(".slider-wrapper")
const menuitems = document.querySelectorAll(".menu-items")

menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log("you clicked!" + index);
    });
});