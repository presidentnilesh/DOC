let user = [
    {
        name : "tiger" ,
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-quKCC_5ldyX-pOhMg0R8XX1wldyBwJCyCg&s" ,
        bio : "silent killer and it is carnivorous" ,
    },
    {
    name : "lion",
    pic : "https://images.unsplash.com/photo-1618641662184-bafefb91a542?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio : "king of the jungle and a powerful carnivorous animal",
    },

    {
        name : "elephant",
        pic : "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:420,cw:1080,ch:1080,q:80,w:1080/TVR7E3Kuzg2iRhKkjZPeWk.jpg" ,
        bio : "largest land animal and known for intelligence and memory",
    },

    {
        name : "cheetah",
        pic : "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_4x3.jpg",
        bio : "fastest land animal and excellent hunter",
    },

    {
        name : "panda",
        pic : "https://images.unsplash.com/photo-1703248187251-c897f32fe4ec?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGElMjBiZWFyfGVufDB8fDB8fHww",
        bio : "cute black and white bear that mainly eats bamboo",
    },

    {
        name : "wolf",
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbf4KqoiQwRM749XKAU1Uzn69hpxZNxAkcg&s",
        bio : "wild animal known for teamwork and hunting in packs",
    }
];

    // show all users 
    // filter karna hai haar baar input karne par
    // show karna hai filtered user ko 

function showUser(arr){
    arr.forEach(function(user) {
        // create card div
        const card = document.createElement("div");
        card.classList.add("card");

        // Image
        let img = document.createElement("img");

        img.setAttribute(
            "src",user.pic); 

        img.classList.add("bg-img");

        // Blurred Layer
        let blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // Content
        let content = document.createElement("div");

        content.classList.add("content");

        // Heading
        let heading = document.createElement("h3");

        heading.textContent = user.name;

        // Paragraph
        let para = document.createElement("p");

        para.textContent = user.bio;

        // Append Elements
        content.appendChild(heading);

        content.appendChild(para);

        card.appendChild(img);

        card.appendChild(blurredLayer);

        card.appendChild(content);

        // Add Card to Body
        document.querySelector(".cards").appendChild(card);
    
    });
}

showUser(user);

let inp = document.querySelector(".inp");
inp.addEventListener("input" , function(){
    let newUser = user.filter((user) =>{
        return user.name.startsWith(inp.value);
    });
    document.querySelector(".cards").innerHTML ="";

    if ( newUser.length == 0){
        document.querySelector(".cards").innerHTML = "<h2 class='not-found'>User Not Found</h2>" ;
    }
    else{
        showUser(newUser);
    }
})