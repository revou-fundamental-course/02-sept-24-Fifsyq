function luassegitiga() {
    let panjang= parseInt(document.getElementById("panjang-alas").value);
    let tinggi= parseInt(document.getElementById("tinggi").value);

    // Validasi input
  if (isNaN(panjang) || isNaN(tinggi)) {
    alert("Angka Harus diisi!");
    return;
  }
    //Hitung Luas 
    let luas = 0.5 * (panjang) * (tinggi);

    //Tampilkan rincian perhitungan dan hasil
    let rincianL = `L&nbsp;= 1/2 x alas + tinggi<br>
                    L&nbsp;= 0.5 x ${panjang} x ${tinggi}<br>
                    L&nbsp;= ${luas}`;
    document.getElementById("rincianluas").innerHTML = rincianL;
    document.getElementById("luas").textContent = `Luas segitiga adalah: ${luas};`
}

function resetluas() {
    document.getElementById("panjang-alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luas").textContent = ""
    document.getElementById("rincianluas").textContent = "";
}

function kelilingsegitiga() {
    let sisiA = parseInt(document.getElementById("sisi-a").value);
    let sisiB = parseInt(document.getElementById("sisi-b").value);
    let sisiC = parseInt(document.getElementById("sisi-c").value);

    // Validasi input
  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    alert("Angka harus diisi!");
    return;
  }

  // Hitung keliling
  let keliling = sisiA + sisiB + sisiC;

  // Tampilkan rincian perhitungan dan hasil
  let rincianK = `K = Sisi A + Sisi B + Sisi C<br>
                 K&nbsp;= ${sisiA} + ${sisiB} + ${sisiC}<br>
                 K&nbsp;= ${keliling}`;
  document.getElementById("rinciankeliling").innerHTML = rincianK;
  document.getElementById("keliling").textContent = `Keliling segitiga adalah: ${keliling}`;
    
}

function resetkeliling() {
    document.getElementById("sisi-a").value = "";
    document.getElementById("sisi-b").value = "";
    document.getElementById("sisi-c").value = "";
    document.getElementById("keliling").value ="";
    document.getElementById("rinciankeliling").textContent = "";
    document.getElementById("luas").value ="";
    document.getElementById("rincianluas").textContent = "";
}