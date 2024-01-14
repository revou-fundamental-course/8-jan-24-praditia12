document.addEventListener("DOMContentLoaded", function () {
    const submitFormArea = document.getElementById("calculateArea");
    const submitFormPerimeter = document.getElementById("calculatePerimeter");
    const reset = document.getElementById("reset");

    submitFormArea.addEventListener("submit", function (event) {
        event.preventDefault();
        hitungLuas();
    });

    submitFormPerimeter.addEventListener("submit", function (event) {
        event.preventDefault();
        hitungKeliling();
    });

    reset.addEventListener("click", function (event) {
        event.preventDefault();
        resetForm();
    });
});

const containerArea = document.getElementById("resultCalculateArea");
const containerPerimeter = document.getElementById("resultCalculatePerimeter");

function hitungLuas() {
    let panjangSisi = parseFloat(document.getElementById("luasPersegiInput").value);

    let luas = panjangSisi * panjangSisi;

    heading = document.createElement("h4");
    heading.innerHTML = "Hasil";

    info = document.createElement("input");
    info.value = `S = ${panjangSisi} x ${panjangSisi}`;
    info.setAttribute("readonly", "true");

    result = document.createElement("input");
    result.value = `S = ${luas}`;
    result.setAttribute("readonly", "true");

    containerArea.append(heading, info, result);

    console.log("Luas Persegi: " + luas);
}

function hitungKeliling() {
    let panjangSisi = parseFloat(document.getElementById("kelilingPersegiInput").value);

    let keliling = 4 * panjangSisi;

    heading = document.createElement("h4");
    heading.innerHTML = "Hasil";

    info = document.createElement("input");
    info.value = `K = 4 x ${panjangSisi}`;
    info.setAttribute("readonly", "true");

    result = document.createElement("input");
    result.value = `K = ${keliling}`;
    result.setAttribute("readonly", "true");

    containerPerimeter.append(heading, info, result);
}

function resetForm() {
    document.getElementById("luasPersegiInput").value = "";
    document.getElementById("kelilingPersegiInput").value = "";

    containerArea.innerHTML = "";
    containerPerimeter.innerHTML = "";
}
