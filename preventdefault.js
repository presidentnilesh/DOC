// // event bublling : jispe event aayega agar ispar listener nahi hua to humaara ebent iske parent par lisgener sundhega air aise 
// document.querySelector("#nav") .addEventListener("click" , function(){  // event bubling (if some function is called in the addEventListener and there is no function to  do , then the function id passed to the parent function of the html)
//     alert("clicked")
// });


        // event bubbling 


let ul = document.querySelector("ul");
ul.addEventListener("click" , function(dets){
    // console.log(dets.target)     //use to print all the lines that are clicked
    //dets.target.classList.add("lt")     // add is use to cut the text (we have written the line-through in the html code in lt id )
    dets.target.classList.toggle("lt")  // toggle -> nahi lagi hoogi to laga deega and lagi hoogi to hata deega 

})

       