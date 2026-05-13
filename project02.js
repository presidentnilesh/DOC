// Select the necessary DOM elements
const addBtn = document.querySelector("#addBtn");
const formModal = document.querySelector('#formModal');
const closeBtn = document.querySelector('#closeBtn');
let closeForm = document.querySelector("#closeForm")
const uiWrapper = document.querySelector(".ui-wrapper");
const leftNav = document.querySelector(".left-nav");
const addBtn = document.querySelector("#addBtn");
const upBtn = document.querySelectorAll(".icon-btn")[1];
const downBtn = document.querySelectorAll(".icon-btn")[2];
const allIconBtns = document.querySelectorAll(".icon-btn");
const profileCard = document.querySelector(".profile-card");
const avatar = document.querySelector(".avatar");
const avatarSvg = document.querySelector(".avatar svg");
const profileName = document.querySelector(".name");
const infoRows = document.querySelectorAll(".info-row");
const labels = document.querySelectorAll(".label");
const values = document.querySelectorAll(".value");
const actions = document.querySelector(".actions");
const primaryBtn = document.querySelector(".btn-primary");
const secondaryBtn = document.querySelector(".btn-secondary");
const phoneIcon = document.querySelector(".phone-icon");
const rightDots = document.querySelector(".right-dots");
const allDots = document.querySelectorAll(".dot");
const blackDot = document.querySelector(".black");
const purpleDot = document.querySelector(".purple");
const orangeDot = document.querySelector(".orange");
const tealDot = document.querySelector(".teal");
const heading = document.querySelector("h2");
const svgPath = document.querySelector("path");



    // actual code 



// Open modal when '+' button is clicked
addBtn.addEventListener('click', () => {
    formModal.classList.remove('hidden');
});

// Close modal when 'x' button is clicked
closeBtn.addEventListener('click', () => { 
    formModal.classList.add('hidden');
});


// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === formModal) {
        formModal.classList.add('hidden');
    }
});