
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


// let h1 = document.querySelector("h1");   // selct the h1
// h1.textContent = "naraj to nahi ho na " ;     // assign h1 = naraj to nahi hai na

// document.querySelector("div").append(h1);   // we can use appendChild or prependChild or prepend 


// jss sha css badalna 
// let h1 = document.querySelector("h1");  //it select the h1
// h1.style.color = "red" ;    //change the text of gthe color to red 
// h1.style.backgroundColor = "green" ;    //change the text of gthe color to red 
// h1.style.fontFamily = "gilroy" ;    //change the text of gthe color to red 
// h1.style.textTransform = "capitalize"
// console.dir(h1) ;

// let h1 = document.querySelector("h1");
// h1.classList.remove("hulu")        // this code add all the properties of hulu that we have declared in the html (body) code 
//h1.classList.toggle("hulu")       // toggle is use to add if class in not add , or it is use to remove if class is added

// let buynow = document.querySelectorAll(".buy_now");  // in this we have createdd some buttons and just want to know more about the button's properties 
// console.log(buynow);

// let heading = document.querySelector("#heading") ;
// heading.textContent = "Welcome to my home baby !" ;

// let lis = document.querySelectorAll("li") ;
// lis.forEach(function(val){
//     console.log(val.textContent) ; 
// })
    // we can also use for loop for this loop

// for(let i = 0 ; i<lis.length ; i++){
//     console.log(lis[i].textContent)
// }

// let img = document.querySelector("img");
// // console.log(img.src)     // methond 1 
// console.log(img.getAttribute("src"));

    // to set link or 
// let a = document.querySelector("a");
// a.href = "https://www.google.com"

    // to set attribute or to set draging 
// let div = document.querySelector("div");
// div.setAttribute("title" , "hey i am doing .")

//     // to remove disability from a button
// let but = document.querySelector("button");
// but.removeAttribute("disabled")

// let ul = document.querySelector("ul");
// let li = document.createElement("li");

// li.textContent ="New task" ;
// ul.appendChild(li) ;

    // use to insert the image and change its width
let img = document.createElement("img");
img.setAttribute("src" , "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg")
img.classList.add("placeholder");
document.querySelector("div").prepend(img)

    // select the first item in the list and delete it from the DOM 
let ul = document.querySelector("ul");
let li = document.querySelector("li");

ul.removeChild(li);

// add a highlight class to every even itmes in a list 
let l2 = document.querySelectorAll("ul li:nth-child(2n)")
console.log(l2)

l2.forEach(function(elem){
    elem.classList.add("highlight")
})