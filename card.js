   // making of card 
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit" , function(dets){
    dets.preventDefault()   // preventdefault is use to npt reload the page when submit is clicked 
    
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src" , inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value ;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;


    profile.append(img);
    card.append(profile);
    card.append(h3)
    card.append(h5)
    card.append(p)
    
    main.appendChild(card)

    inputs.forEach(function(inp){
        if (inp.type !== "submit"){
            inp.value = "";
        }
    })
});

// hello ma'am it's me and i am doing something to make the js. gpood and i want you to look after this and give me rating and some opportunities so that i can do good in my life .