//     // setTimer complete the given task after defined time , and the setInterval keep doing the task  after the interval of the given time 

// // let tm = setInterval(function(){ 
// //     console.log("hello mummy ");
// // }, 1000);

// // console.log("heloo")

// // clearInterval(tm)        // it clear the setTimer (it will not allow the setTimer to run) and same case goes with clearInterval 


//     // concept
// let count = 10 
// let inte = setInterval(function(){
//     if (count>=0){
//         console.log(count);
//         count-- ;
//     }
//     else {
//         clearInterval(inte)
//     }
// } , 1000);


        // download simulation with glass morphism

let count = 0 
let sec = 3 ;
let progress = document.querySelector(".progress-bar") 
let precent = document.querySelector(".percent")
let intv = setInterval(function(){
    if(count <=99){
        count++ ;
        progress.style.width = `${count}%`
        precent.textContent = `${count}%`;
    }
    else {
        document.querySelector("h2").textContent = "Downloaded "
        clearInterval(intv);
    }
}, sec*(1000)/100);