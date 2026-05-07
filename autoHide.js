// let banner = document.querySelector(".banner");

// setTimeout(function(){

//     banner.style.display = "none";

// }, 3000);



let banner = document.querySelector(".banner")


function bannerLoop( ) {
    // appear at statring 
    banner.style.display = "block" ;

    // disapper after 3 sec 
    setTimeout(function(){
        banner.style.display = "none" ;
    }, 3000);
}

bannerLoop() ;
setInterval(bannerLoop , 10000)    // it will run the bannerloop function in loop

