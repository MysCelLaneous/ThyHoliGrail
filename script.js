const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* ===========================================================
   CLOSE MOBILE MENU
=========================================================== */

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ===========================================================
   ACTIVE NAVIGATION
=========================================================== */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("#nav a");

function activateNav(){

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 140;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if(href === "#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activateNav);


/* ===========================================================
   SCROLL REVEAL
=========================================================== */

const revealTargets = document.querySelectorAll(

    ".home-product-card,\
    .home-about-grid,\
    .home-pantry-grid,\
    .home-ritual-card,\
    .home-contact,\
    .pantry-product-card,\
    .pantry-story-grid,\
    .pantry-benefit,\
    .pantry-cta"

);

revealTargets.forEach((element,index)=>{

    element.classList.add("reveal");

    if(index % 3 === 1){

        element.classList.add("reveal-delay-1");

    }

    if(index % 3 === 2){

        element.classList.add("reveal-delay-2");

    }

});


const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},

{

threshold:.12

}

);


revealTargets.forEach(el=>{

observer.observe(el);

});


/* ===========================================================
   HEADER SHRINK
=========================================================== */

const header = document.querySelector(".header");

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

const amount = window.scrollY;

if(header){

    if(amount > 40){

        header.style.height="72px";

        header.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";

    }

    else{

        header.style.height="88px";

        header.style.boxShadow="0 8px 30px rgba(0,0,0,.04)";

    }

}

if(navbar){

    if(amount > 40){

        navbar.style.padding="10px 0";

        navbar.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";

    }

    else{

        navbar.style.padding="18px 0";

        navbar.style.boxShadow="0 8px 30px rgba(0,0,0,.04)";

    }

}

});


/* ===========================================================
   SMOOTH SCROLL
=========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target)return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});


/* ===========================================================
   PRODUCT CARD PARALLAX
=========================================================== */

document.querySelectorAll(

".home-product-card,.pantry-product-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*8;

const rotateX=((y/rect.height)-0.5)*-8;

card.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/* ===========================================================
   HERO IMAGE FLOAT
=========================================================== */

document.querySelectorAll(

".home-hero-image img,.pantry-hero-image img"

).forEach(image=>{

image.animate(

[

{

transform:"translateY(0px)"

},

{

transform:"translateY(-12px)"

},

{

transform:"translateY(0px)"

}

],

{

duration:4500,

iterations:Infinity,

easing:"ease-in-out"

}

);

});
