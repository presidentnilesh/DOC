let nm = document.querySelector("#name");
let form = document.querySelector("form");

// form.addEventListener("submit" , function(dets){
//     dets.preventDefault();

//     if (nm.value.length <=2 ){
//         document.querySelector("#hide").style.display = "initial" ;
//     }
//     else{
//        document.querySelector("#hide").style.display = "none" ;

//    }
// });

form.addEventListener("submit" , function(dets){
    dets.preventDefault() ;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let ans = regex.test("harsh@test.com"); // this is a valid email
    let regex2 = /^[a-zA-Z0-9_]{3,15}$/;
    let use = regex2.test("harshkumar") ;
    console.log(ans);
})
