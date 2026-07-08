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
/* ===========================================================
   PHASE 4 — ADD TO THE BOTTOM OF script.js
=========================================================== */


/* SCROLL PROGRESS BAR */

const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    progressBar.style.width = `${progress}%`;
});


/* LUXURY LOADER */

const loader = document.createElement("div");
loader.className = "luxury-loader";

loader.innerHTML = `
    <div class="loader-inner">
        <img src="${
            document.body.classList.contains("seasonings-page")
                ? "../assets/logo/hglogo2.png"
                : "assets/logo/hglogo2.png"
        }" alt="Thy Holi Grail Logo">
        <p>Thy Holi Grail</p>
    </div>
`;

document.body.appendChild(loader);

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 650);
});


/* PRODUCT GLOW FOLLOW */

document.querySelectorAll(".home-product-card, .pantry-product-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--x", `${x}%`);
        card.style.setProperty("--y", `${y}%`);
    });
});


/* QUICK VIEW PRODUCT DATA */

const productData = {
    "Luster": {
        category: "Body Cleanser",
        title: "Luster Body Cleanser",
        description: "A luxurious cleanser created to refresh the skin while supporting a soft, polished glow.",
        benefits: ["Gentle daily cleanse", "Spa-inspired body care", "Soft polished finish"],
        link: "https://thyholigrail.myshopify.com/products/luster-body-cleanser"
    },

    "Herbal": {
        category: "Hair Oil",
        title: "Herbal Hair Oil",
        description: "A nourishing herbal oil crafted to support healthy-looking hair and scalp care rituals.",
        benefits: ["Nourishing hair ritual", "Scalp care inspired", "Lightweight finish"],
        link: "https://thyholigrail.myshopify.com/products/herbal-hair-oil"
    },

    "Velvet": {
        category: "Body Butter",
        title: "Velvet Body Butter",
        description: "A rich, luxurious body butter crafted to deeply moisturize and leave skin feeling soft.",
        benefits: ["Rich moisture", "Soft skin feel", "Luxury body care ritual"],
        link: "https://thyholigrail.myshopify.com/products/velvet-body-butter"
    },

    "Silken": {
        category: "Body Oil",
        title: "Silken Body Oil",
        description: "A lightweight body oil made to leave skin glowing, smooth, and beautifully nourished.",
        benefits: ["Radiant glow", "Smooth finish", "Lightweight nourishment"],
        link: "https://thyholigrail.myshopify.com/products/silken-body-oil"
    },

    "Hibiscus Harmony Tea": {
        category: "Wellness Tea",
        title: "Hibiscus Harmony Tea",
        description: "A vibrant tea blend with a beautiful floral finish and a naturally refreshing character.",
        benefits: ["Floral flavor", "Refreshing ritual", "Wellness inspired"],
        link: "#"
    },

    "Pineapple Ginger Tea": {
        category: "Wellness Tea",
        title: "Pineapple Ginger Tea",
        description: "A warm, bright blend with tropical sweetness and comforting ginger notes.",
        benefits: ["Bright tropical notes", "Comforting ginger", "Perfect hot or iced"],
        link: "#"
    },

    "All Purpose Seasoning": {
        category: "Signature Seasoning",
        title: "All Purpose Seasoning",
        description: "A versatile kitchen essential designed for meats, vegetables, seafood, and more.",
        benefits: ["Everyday flavor", "Versatile blend", "Perfect pantry staple"],
        link: "#"
    },

    "Low Sodium Seasoning": {
        category: "Signature Seasoning",
        title: "Low Sodium Seasoning",
        description: "Full-bodied flavor with a lighter touch, crafted for mindful everyday cooking.",
        benefits: ["Lower sodium option", "Full flavor", "Mindful cooking"],
        link: "#"
    }
};


/* QUICK VIEW MODAL */

const modal = document.createElement("div");
modal.className = "quick-view-modal";

modal.innerHTML = `
    <div class="quick-view-box">
        <button class="close-modal" aria-label="Close product quick view">×</button>

        <div class="quick-view-image">
            <img src="" alt="">
        </div>

        <div class="quick-view-content">
            <span></span>
            <h3></h3>
            <p></p>
            <ul></ul>

            <div class="quick-view-actions">
                <a href="#" class="btn-gold modal-shop-link">Shop on Shopify</a>
                <button class="btn-outline-gold modal-close-btn">Keep Browsing</button>
            </div>
        </div>
    </div>
`;

document.body.appendChild(modal);

const modalImg = modal.querySelector(".quick-view-image img");
const modalCategory = modal.querySelector(".quick-view-content span");
const modalTitle = modal.querySelector(".quick-view-content h3");
const modalDescription = modal.querySelector(".quick-view-content p");
const modalBenefits = modal.querySelector(".quick-view-content ul");
const modalShopLink = modal.querySelector(".modal-shop-link");
const closeModalBtn = modal.querySelector(".close-modal");
const keepBrowsingBtn = modal.querySelector(".modal-close-btn");

function openProductModal(card, productName, isPantry = false) {
    const data = productData[productName];

    if (!data) return;

    const img = card.querySelector("img");

    modalImg.src = img.src;
    modalImg.alt = img.alt;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    modalBenefits.innerHTML = data.benefits
        .map(item => `<li>${item}</li>`)
        .join("");

    modalShopLink.href = data.link;

    if (data.link === "#") {
        modalShopLink.textContent = "Coming Soon";
    } else {
        modalShopLink.textContent = "Shop on Shopify";
    }

    modal.classList.toggle("pantry-mode", isPantry);
    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

closeModalBtn.addEventListener("click", closeProductModal);
keepBrowsingBtn.addEventListener("click", closeProductModal);

modal.addEventListener("click", e => {
    if (e.target === modal) {
        closeProductModal();
    }
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeProductModal();
    }
});


/* CONNECT MODAL TO HOME PRODUCTS */

document.querySelectorAll(".home-product-card").forEach(card => {
    card.addEventListener("click", e => {
        const title = card.querySelector("h3")?.textContent.trim();

        if (!title || !productData[title]) return;

        e.preventDefault();

        openProductModal(card, title, false);
    });
});


/* CONNECT MODAL TO PANTRY PRODUCTS */

document.querySelectorAll(".pantry-product-card").forEach(card => {
    card.addEventListener("click", e => {
        const title = card.querySelector("h3")?.textContent.trim();

        if (!title || !productData[title]) return;

        e.preventDefault();

        openProductModal(card, title, true);
    });
});
