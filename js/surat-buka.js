const toFinalBtn = document.getElementById("tofinal");
const nextBtn = document.getElementById("lanjut");
const toMemoryBtn = document.getElementById("toMemory");

const surat = document.getElementById("surat-buka");
const apresiasi = document.getElementById("apresiasi");
const memory = document.getElementById("memory");
const finalLetter = document.getElementById("final-letter");

// SURAT -> APRESIASI

nextBtn.addEventListener("click", () => {

    surat.style.display = "none";

    apresiasi.classList.remove("hidden");
    apresiasi.classList.add("fade");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// APRESIASI -> MEMORY

toMemoryBtn.addEventListener("click", () => {

    apresiasi.style.display = "none";

    memory.classList.remove("hidden");
    memory.classList.add("fade");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// MEMORY -> FINAL LETTER

toFinalBtn.addEventListener("click", () => {

    memory.style.display = "none";

    finalLetter.classList.remove("hidden");
    finalLetter.classList.add("fade");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// BACA ULANG

const restartBtn =
document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {

    window.location.href = "../index.html";

});

// POPUP SELESAI

const finishBtn =
document.getElementById("finishBtn");

const popupFinish =
document.getElementById("popupFinish");

const closePopup =
document.getElementById("closePopup");

finishBtn.addEventListener("click", () => {

    popupFinish.classList.remove("hidden");

    setTimeout(() => {
    confetti({
        particleCount: 80,
        spread: 100,
        origin: { x: 0.2 }
    });

    confetti({
        particleCount: 80,
        spread: 100,
        origin: { x: 0.8 }
    });
}, 300);

});

closePopup.addEventListener("click", () => {

    popupFinish.classList.add("hidden");

});

// POPUP FOTO

const photoPopup =
document.getElementById("photoPopup");

const popupImage =
document.getElementById("popupImage");

const closePhoto =
document.getElementById("closePhoto");

const photos =
document.querySelectorAll(".memory");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        photoPopup.classList.remove("hidden");

        popupImage.src = photo.src;

    });

});

closePhoto.addEventListener("click", () => {

    photoPopup.classList.add("hidden");

});

photoPopup.addEventListener("click", (e) => {

    if (e.target === photoPopup) {

        photoPopup.classList.add("hidden");

    }

});

