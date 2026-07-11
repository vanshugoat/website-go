// ---------- SETTINGS ----------

let chances = 3;
let gameOver = false;

const chanceText = document.getElementById("chance");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

const gifts = document.querySelectorAll(".gift");

// Prize images
const prizes = [
    "assets/wini.png",
    "assets/winm.png",
    "assets/winb.png"
];

// Random winning box (1-9)
const winningGift = Math.floor(Math.random()*9);

// ------------------------------


// Sample comments

let comments=[

{name:"Rahul",msg:"i can't believe i just won an i phone"},

{name:"Priya",msg:"i thought this was fake but i am wrong❤️‍🔥"},

{name:"Aman",msg:"damn! mac very vvery cool❤️"},

{name:"Neha",msg:"Hope I get lucky 🤞"},

{name:"Arjun",msg:"my bullet is taking with wind thankyu for gift!!"},

{name:"Simran",msg:"yeeeeeessssssssss i won a mac from here"},

{name:"Karan",msg:"yooo delivery is very fast!"}

];

loadComments();


// ---------- GIFT CLICK ----------

gifts.forEach((gift,index)=>{

gift.addEventListener("click",()=>{

if(gameOver) return;

if(gift.classList.contains("opened")) return;

gift.classList.add("opened");

gift.style.animation="none";

gift.style.transform="scale(1.25) rotate(4deg)";

gift.style.transition=".35s";

gift.style.filter="drop-shadow(0 0 30px gold)";

navigator.vibrate?.(60);

chances--;

chanceText.innerHTML=chances;

setTimeout(()=>{

gift.style.transform="scale(.9)";

},250);

setTimeout(()=>{

gift.style.transform="scale(1.15)";

},420);

if(index===winningGift){

gameOver=true;

let prize=prizes[Math.floor(Math.random()*3)];

setTimeout(()=>{

popup.style.display="flex";

popupImg.src=prize;

navigator.vibrate?.([100,50,120]);

},700);

return;

}

if(chances==0){

gameOver=true;

setTimeout(()=>{

alert("Better luck next time ❤️");

},700);

}

});

});


// ---------- CLOSE POPUP ----------

popup.onclick=function(){

popup.style.display="none";

location.href="next.html";

}


// ---------- COMMENTS ----------

function loadComments(){

let html="";

comments.forEach(c=>{

html+=`

<div class="comment">

<h3>${c.name}</h3>

<p>${c.msg}</p>

</div>

`;

});

document.getElementById("comments").innerHTML=html;

}


// ---------- ADD COMMENT ----------

document.getElementById("postBtn").onclick=function(){

const n=document.getElementById("name");

const m=document.getElementById("msg");

if(n.value.trim()==""||m.value.trim()=="") return;

comments.unshift({

name:n.value,

msg:m.value

});

n.value="";

m.value="";

loadComments();

}