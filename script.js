function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";  // Responsive sınıfını ekle (menüyü aç)
  } else {
    x.className = "topnav";        // Sınıfı kaldır (menüyü kapat)
  }
}
