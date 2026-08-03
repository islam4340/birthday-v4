window.onload = function(){

// Loader
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},2500);

// Music
const music=document.getElementById("music");
const btn=document.getElementById("playBtn");

btn.onclick=function(){

music.play();

this.innerHTML="❤️ Enjoy Your Day ❤️";

};

// Photo Slider
const slides=document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current=(current+1)%slides.length;

slides[current].classList.add("active");

},4000);

// Hearts
const hearts=document.getElementById("hearts");

setInterval(()=>{

const h=document.createElement("div");

h.className="heart";

h.innerHTML=["❤️","💖","💕","💗","💓"][Math.floor(Math.random()*5)];

h.style.left=Math.random()*100+"%";

h.style.fontSize=(20+Math.random()*25)+"px";

h.style.animationDuration=(5+Math.random()*4)+"s";

hearts.appendChild(h);

setTimeout(()=>{

h.remove();

},9000);

},300);
// Rose Petals
const petals=document.getElementById("petals");

setInterval(()=>{

const p=document.createElement("div");

p.className="petal";

p.innerHTML="🌹";

p.style.left=Math.random()*100+"%";

p.style.fontSize=(18+Math.random()*18)+"px";

p.style.animationDuration=(7+Math.random()*4)+"s";

petals.appendChild(p);

setTimeout(()=>{
p.remove();
},11000);

},700);


// Balloons
const balloons=document.getElementById("balloons");

setInterval(()=>{

const b=document.createElement("div");

b.className="balloon";

b.innerHTML=["🎈","🎈","🎈","🎈","🎈"][Math.floor(Math.random()*5)];

b.style.left=Math.random()*100+"%";

b.style.fontSize=(35+Math.random()*20)+"px";

b.style.animationDuration=(9+Math.random()*5)+"s";

balloons.appendChild(b);

setTimeout(()=>{
b.remove();
},14000);

},1200);
// Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

btn.addEventListener("click", ()=>{

    for(let i=0;i<25;i++){

        setTimeout(()=>{

            const x=Math.random()*canvas.width;
            const y=Math.random()*(canvas.height*0.5);

            for(let j=0;j<30;j++){

                const angle=(Math.PI*2/30)*j;
                const len=20+Math.random()*40;

                ctx.beginPath();
                ctx.moveTo(x,y);
                ctx.lineTo(
                    x+Math.cos(angle)*len,
                    y+Math.sin(angle)*len
                );
                ctx.strokeStyle=`hsl(${Math.random()*360},100%,60%)`;
                ctx.lineWidth=2;
                ctx.stroke();
            }

            setTimeout(()=>{
                ctx.clearRect(0,0,canvas.width,canvas.height);
            },500);

        },i*250);

    }

});

// শেষ
};
