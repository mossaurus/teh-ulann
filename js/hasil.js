document
.getElementById("next")
.addEventListener("click", function() {
    window.location.href = "surat.html"; 
});

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