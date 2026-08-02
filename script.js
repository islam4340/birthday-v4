window.onload = function () {

    // Loader Hide
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);

    // Music
    const music = document.getElementById("music");
    const btn = document.getElementById("playBtn");

  btn.onclick = function(){

    console.log("Fireworks Started");

    for(let i=0; i<100; i++){

        let x = canvas.width / 2;
        let y = canvas.height / 3;

        setTimeout(()=>{

            ctx.beginPath();
            ctx.arc(
                x + (Math.random()*300-150),
                y + (Math.random()*200-100),
                4,
                0,
                Math.PI*2
            );

            ctx.fillStyle = "red";
            ctx.fill();

        }, i*20);

    }

};

    // Slideshow
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3500);

    // Hearts Animation
    const hearts = document.getElementById("hearts");

    const petals=document.getElementById("petals");

    const canvas = document.getElementById("fireworks");
    const balloons=document.getElementById("balloons");
    
const ctx = canvas.getContext("2d");

    console.log("Canvas:", canvas);
    
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
    
    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = ["❤️","💖","💕","💗","💓"][Math.floor(Math.random()*5)];

        heart.style.left = Math.random()*100 + "%";

        heart.style.fontSize = (20 + Math.random()*25) + "px";

        heart.style.animationDuration = (5 + Math.random()*4) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);

    }, 300);

    setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(6+Math.random()*4)+"s";

petals.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

},700);
btn.addEventListener("click",()=>{

for(let i=0;i<40;i++){

setTimeout(()=>{

const x=Math.random()*canvas.width;
const y=Math.random()*canvas.height/2;

ctx.beginPath();
ctx.arc(x,y,3,0,Math.PI*2);
ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
ctx.fill();

setTimeout(()=>{
ctx.clearRect(0,0,canvas.width,canvas.height);
},400);

},i*80);

}

});
setInterval(()=>{

const b=document.createElement("div");

b.className="balloon";

b.innerHTML=["🎈","🎈","🎈","🎈"][Math.floor(Math.random()*4)];

b.style.left=Math.random()*100+"%";

b.style.animationDuration=(8+Math.random()*5)+"s";

balloons.appendChild(b);

setTimeout(()=>{
b.remove();
},13000);

},1200);
};
