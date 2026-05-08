let form = document.querySelector("#form");

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");

let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let phoneError = document.querySelector("#phoneError");

let success = document.querySelector("#success");


form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;


    // Regex
    let nameRegex = /^[a-zA-Z ]{3,30}$/;

    let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    let phoneRegex = /^[0-9]{10}$/;


    // Name Validation
    if(!nameRegex.test(nameInput.value)){

        nameError.style.display = "block";

        valid = false;

    }
    else{

        nameError.style.display = "none";

    }


    // Email Validation
    if(!emailRegex.test(emailInput.value)){

        emailError.style.display = "block";

        valid = false;

    }
    else{

        emailError.style.display = "none";

    }


    // Phone Validation
    if(!phoneRegex.test(phoneInput.value)){

        phoneError.style.display = "block";

        valid = false;

    }
    else{

        phoneError.style.display = "none";

    }


    // Success Message
    if(valid){

        success.style.display = "block";

    }
    else{

        success.style.display = "none";

    }

});