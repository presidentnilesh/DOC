// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){

//     document.body.classList.toggle("light");

// });



function setDarkOrLight(){
    if (window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.add("dark") ;
        document.body.classList.remove ("light")
    }
    else{
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }

}

document.body.classList.add(localStorage.getItem("theme")) ;

let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        localStorage.setItem("theme" , "light")
    }
    else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");

        localStorage.setItem("theme" , "dark")
    }
})

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change" , function(){
    if(!localStorage.getItem("theme")){ // if there is not set theme in the website then it willdetect the theme of device and make it according to that
            setDarkOrLight()
    }

});


        //chatgpt 

//         let btn = document.querySelector("button");


// // Apply Theme
// function applyTheme(theme){

//     document.body.classList.remove("light", "dark");

//     document.body.classList.add(theme);

// }


// // Detect System Theme
// function detectSystemTheme(){

//     if(window.matchMedia("(prefers-color-scheme: dark)").matches){
//         applyTheme("dark");
//     }
//     else{
//         applyTheme("light");
//     }

// }


// // Check Saved Theme
// let savedTheme = localStorage.getItem("theme");

// if(savedTheme){
//     applyTheme(savedTheme);
// }
// else{
//     detectSystemTheme();
// }


// // Toggle Theme Button
// btn.addEventListener("click", function(){

//     let isDark = document.body.classList.contains("dark");

//     let newTheme = isDark ? "light" : "dark";

//     applyTheme(newTheme);

//     localStorage.setItem("theme", newTheme);

// });


// // Detect OS Theme Change
// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){

//     if(!localStorage.getItem("theme")){
//         detectSystemTheme();
//     }

// });