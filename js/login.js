const nama = document.getElementById("nama");
const tanggal = document.getElementById("tanggal");
const bulan = document.getElementById("bulan");
const tahun = document.getElementById("tahun");

const loginButton =
document.getElementById("loginButton");

const errorMessage =
document.getElementById("errorMessage");

loginButton.addEventListener("click", () => {

    if (
        nama.value === "Wulan Sari" &&
        tanggal.value === "13" &&
        bulan.value === "06" &&
        tahun.value === "2005"
    ) {

        errorMessage.innerHTML =
        "✓ Data valid";

        errorMessage.className =
        "success";

        setTimeout(() => {
            window.location.href =
            "hasil.html";
        }, 1000);

    } else {

        errorMessage.innerHTML =
        "⚠ Format salah. Gunakan huruf kapital pada nama dan tanggal/bulan harus 2 digit.";

        errorMessage.className =
        "error";

        setTimeout(() => {
            errorMessage.innerHTML = "";
        }, 5000);

    }

});