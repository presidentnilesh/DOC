        // Event capturing is a process in JavaScript where an event starts from the top (document/root) and travels down to the target element.
        
        // event bubbling -> It is a process in JavaScript where an event starts from the target element and then propagates (bubbles up) to its parent elements one by one.

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    console.log("button clicked")
});
c.addEventListener("click" , function(){
    console.log("c clicked")
})
b.addEventListener("click" , function(){
    console.log("b clicked")
})
a.addEventListener("click" , function(){
    console.log("a clicked")
}, true);    // as we. added , ture in the last , now it is capturing phase . and this event will run before bubbling phase 

