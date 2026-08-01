window.onload = () => {

    // Loader Hide
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);

    // Slideshow
    const slides = document.querySelectorAll(".slide");
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 4000);

    // Music
    const music = document.getElementById("music");
    const btn = document.getElementById("start");

    btn.onclick = () => {
        music.play();
        btn.innerHTML = "❤️ Enjoy ❤️";
    };

};
