
// let h1 = document.querySelector("h1")

// console.dir(h1)
// // h1.innerText = "how is my baby !"
// h1.innerHTML ="<i>How is the day </i>" ;
// h1.hidden = true ;

// let a = document.querySelector("a") ; 
// a.href = "https://www.google.com" ;      // method 1 
// a.setAttribute("href" , "https://instagram.com")      // method 2


// let image = document.querySelector("img") ;
// image.setAttribute("src" , "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg") ;

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));


// let a = document.querySelector("a");
// a.removeAttribute("href");


// create element 
// append/prepend karo jaha bhi element chahiya waha 

// let h1 = document.createElement("h1") ;         // use to create elemtent 
// h1.textContent = "hello ji kaishe hai aap ";        // use to write whatever you want 
// document.querySelector("body").append(h1)       // use to display in the body 

// let h1 = document.querySelector("h1");      // it select the hq and allow to display in the screen 
// h1.remove();        // use to remove h1 


let h1 = document.querySelector("h1");
h1.textContent = "naraj tonahi ho na " ;

document.querySelector("div").appendChild(h1)