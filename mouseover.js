    // mouse-over and mouse-out


// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover" , function(){
//     abcd.style.backgroundColor = "yellow" ;
// });

// abcd.addEventListener("mouseout" , function(){
//     abcd.style.backgroundColor = "red" ;
// });

    // / mouse-move 

let abcd = document.querySelector("#abcd")
window.addEventListener("mousemove" , function(dets){
    abcd.style.top = (dets.clientY-200) + "px" ;
    abcd.style.left = (dets.clientX-200) + "px" ;
});

        //keyup and keydown 



// document.addEventListener("keydown" , function(e){
//     if(e.key === "Enter"){
//         console.log("enter pressed")
//     }
// });
// document.addEventListener("keyup" , function(e){
//     console.log("released:" , e.key);
// });

    // email and password input

let input = document.querySelector("input" , function(dets){

})