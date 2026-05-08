// local storage -> aapke browser ka andar data store karna jo ki browser and hone par bhi delete nahi hooga 

// sessionStorage -> ya aapke data ko temporarly store karta hai matlab ki tab band hua aur data gaya 

// cookies -> ya bhi data dtore karta hai and aapka data browser ke cookies naam ke property main save hota hai and ya cookie concept kam data ya light data ka liya hoota hai 

        // localStorage 
// setItem -> use to store data or item
// getItem -> use to get valueor data stored in a variable 
// removeItem -> it is use to remove item or value 
// .setItem -> it is use to update or overwrite the data if data is already present in the localStorage 

localStorage.setItem("name" , "nilesh") ;

// localStorage.removeItem("name");
let val = localStorage.getItem("name");

localStorage.setItem("name" , "anand")  // update or overwrite

                // sesionStorage
// same as localStorage


                // COOKIES
// add -> document.cookies = "email=nilu@nilu.nilu"
//        document.cookies="age=21"

localStorage.setItem("friends" , {one: "akash" , two:"aman"});  // we only store string in localStorage

// method to store array in localstorage

localStorage.setItem("friends", JSON.stringify(["akash", "aman" , "rahul"]))
