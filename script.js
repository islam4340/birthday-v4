window.onload = function () {

    // Loader Hide
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);

    // Music
    const music = document.getElementById("music");
    const btn = document.getElementById("playBtn");

    btn.addEventListener("click", () => {
        music.play();
        btn.innerHTML = "❤️ Enjoy Your Day ❤️";
    });

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
};
