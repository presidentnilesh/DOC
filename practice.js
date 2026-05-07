// let form = document.querySelector("#form");

// let username = document.querySelector("#username");
// let email = document.querySelector("#email");

// let userError = document.querySelector("#userError");
// let emailError = document.querySelector("#emailError");

// let success = document.querySelector("#success");

// form.addEventListener("submit", function(e){

//     e.preventDefault();

//     // Username Regex
//     let userRegex = /^[a-zA-Z0-9_]{3,15}$/;

//     // Email Regex
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     let valid = true;

//     // Username Validation
//     if(!userRegex.test(username.value)){
//         userError.style.display = "block";
//         valid = false;
//     }
//     else{
//         userError.style.display = "none";
//     }

//     // Email Validation
//     if(!emailRegex.test(email.value)){
//         emailError.style.display = "block";
//         valid = false;
//     }
//     else{
//         emailError.style.display = "none";
//     }

//     // Success Message
//     if(valid){
//         success.style.display = "block";
//     }
//     else{
//         success.style.display = "none";
//     }

// });


        // myself

let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let usernameError = document.querySelector("#usernameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError")

form.addEventListener("submit" , function(dets){
    dets.preventDefault();

    let usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let usernameans = usernameRegex.test(username.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans){
        emailError.style.display = "initial";   // we can use block or initial 
    }
    else {
        emailError.style.display = "none";
    }
    if (!usernameans){
        usernameError.style.display = "block" ;
    }
    else{
        usernameError.style.display = "none" ;
    }
    if(!passwordans){
        passwordError.style.display = "block" ;
    }
    else{
        passwordError.style.display = "none" ;
    }

    let message = document.querySelector("#success");
    
    if(emailans  && usernameans && passwordans ){
        message.style.display ="initial"
    }
    else{
        message.style.display ="none"
    }
});

