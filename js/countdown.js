const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const targetDate = new Date(
  "June 9, 2026 02:58:10"
).getTime();

const resultButton = document.getElementById("resultButton");

const timer = setInterval(() => {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const d = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const h = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const m = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const s = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  days.innerHTML = String(d).padStart(2, "0");
hours.innerHTML = String(h).padStart(2, "0");
minutes.innerHTML = String(m).padStart(2, "0");
seconds.innerHTML = String(s).padStart(2, "0");

if (distance < 0) {
  clearInterval(timer);
  days.innerHTML = "00";
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  resultButton.disabled = false;
  
  // ganti warna tombol dan teks
  resultButton.classList.remove("btn-secondary");
  resultButton.classList.add("btn-open");
  resultButton.innerHTML = "Buka Hasil";

}

// klik pindah link

resultButton.addEventListener("click", () => {
  window.location.href = "login.html"; });

}, 1000);



