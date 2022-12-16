
const fbeer = document.getElementById("beer-name");
fbeer.innerText = "Chalbi Crisp";
//console.log(fbeer.innerText); 


const descrip = document.getElementById("beer-description");
descrip.innerText = "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.";
//console.log(descrip.innerText);

function newImage(img_url){
    let beerImage = document.getElementById("beer-image")
    beerImage.src = img_url   
}
newImage("https://i.ibb.co/wQ4G0w1/flatiron-brew.png");
document.getElementById("beer-image").alt = "Chalbi Crisp";

let txt = document.querySelector("#beer-list > li:nth-child(1)");
txt.innerText = "Chalbi Crisp";
//console.log(txt);
const beer2 = document.querySelector("#beer-list > li:nth-child(2)");
beer2.innerText = "Sugar Brown";
const beer3 = document.querySelector("#beer-list > li:nth-child(3)");
beer3.innerText = 'Duney';

const rev1 = document.querySelector("#review-list > li:nth-child(1)");
rev1.innerText = ["It's flat! Just the way I like it!!", 
"Is this the real beer, is this just fantasy?", 
"I've always hated bubbles going up my nose, so this is absolutely delightful.",
]


const serverRev = document.querySelector("#review-list > li:nth-child(2)");
serverRev = "The customer is always right!";




