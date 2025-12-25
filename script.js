function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";  // Responsive sınıfını ekle (menüyü aç)
  } else {
    x.className = "topnav";        // Sınıfı kaldır (menüyü kapat)
  }
}

// === REZERVASYON KISMI ===
document.getElementById("rezForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let sube = document.getElementById("sube").value;
    let tarih = document.getElementById("tarih").value;
    let saat = document.getElementById("saat").value;
    let masa = document.getElementById("masa").value;
    let isim = document.getElementById("isim").value;
    let etkinlik = document.getElementById("etkinlik").value;

    let sonuc = document.getElementById("sonuc");

    sonuc.style.display = "block";
    sonuc.innerHTML = `
        <strong>✅ Rezervasyonunuz Alındı!</strong><br><br>
        <b>İsim:</b> ${isim}<br>
        <b>Şube:</b> ${sube}<br>
        <b>Tarih:</b> ${tarih}<br>
        <b>Saat:</b> ${saat}<br>
        <b>Kişi Sayısı:</b> ${masa}<br>
        <b>Etkinlik:</b> ${etkinlik}
    `;
});

