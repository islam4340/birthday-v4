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
document.querySelectorAll(".text,.from").forEach((el,i)=>{
    setTimeout(()=>{
        el.classList.add("show");
    }, i*600);
});

this.innerHTML="❤️ Enjoy Your Day ❤️";

    const items = document.querySelectorAll(".hidden");

items.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add("show");
    }, (index + 1) * 900);
});
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
const flash = document.getElementById("flash");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
}
btn.addEventListener("click",()=>{

    for(let n=0;n<12;n++){

        setTimeout(()=>{

            flash.style.opacity="0.7";
setTimeout(()=>flash.style.opacity="0",120);
            
            const x=Math.random()*canvas.width;
            const y=Math.random()*(canvas.height*0.5);

            const particles=[];

            for(let i=0;i<80;i++){
                particles.push({
                    x:x,
                    y:y,
                    angle:(Math.PI*2/80)*i,
                    speed:2+Math.random()*5,
                    life:60,
                    color:`hsl(${Math.random()*360},100%,60%)`
                });
            }

            let animation=setInterval(()=>{

                ctx.clearRect(0,0,canvas.width,canvas.height);

                particles.forEach(p=>{

                    p.x+=Math.cos(p.angle)*p.speed;
                    p.y+=Math.sin(p.angle)*p.speed;

                    p.speed*=0.98;
                    p.life--;

                    ctx.beginPath();
ctx.arc(p.x,p.y,2.8,0,Math.PI*2);

ctx.shadowBlur = 20;
ctx.shadowColor = p.color;

ctx.fillStyle = p.color;
ctx.fill();

ctx.shadowBlur = 0;
                });

                if(particles[0].life<=0){
                    clearInterval(animation);
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                }

            },16);

        },n*500);

    }

});
