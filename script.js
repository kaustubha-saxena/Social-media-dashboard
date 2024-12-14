let switch_btn=document.querySelector(".switch");
let key_btn=document.querySelector(".key");
let card=document.querySelectorAll(".dark-card");
let text=document.querySelectorAll(".text")
let header=document.getElementsByTagName("header")[0]
switch_btn.addEventListener("click",()=>{
    key_btn.classList.toggle("theme-change")
    card.forEach(element => {
        element.classList.toggle("light-card");
        // console.log(element);
        
    });
    text.forEach(element => {
        element.classList.toggle("light-text");
        // console.log(element);
        
    });
    document.body.classList.toggle("light-body");
    header.classList.toggle("light-header");
    key_btn.classList.toggle("light-key")
})