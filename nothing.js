    //approch for displaying the text whatever you are typing in the keyboard 

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown" , function(dets){
//     if (dets.key != " "){
//         h1.textContent = dets.key ;
//     }
//     else {
//         h1.textContent = "space"
//     }
// });


    // method to display the uplad file button and make it full functional to upload anything 
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp")
btn.addEventListener("click" , function(){
    fileinp.click();
})

fileinp.addEventListener("change" , function(dets){
    console.log(dets)
})