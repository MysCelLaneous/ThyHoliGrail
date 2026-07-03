// ======================
// Mobile Navigation
// ======================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ======================
// Header Shadow on Scroll
// ======================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 12px 35px rgba(0,0,0,.08)";
        header.style.background = "rgba(252,247,241,.98)";

    }

    else{

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.04)";
        header.style.background = "rgba(252,247,241,.94)";

    }

});


// ======================
// Fade In Animation
// ======================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
