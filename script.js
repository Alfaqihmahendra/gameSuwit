function getPilihanComputer() {
  const computer = Math.random();
  if (computer < 0.34) return "batu";
  if (computer >= 0.34 && computer < 0.67) return "gunting";
  return "kertas";
}

function getHasil(player, computer) {
  if (player == computer) return "SERI!";
  if (player == "batu") return computer == "gunting" ? "Menang!" : "Kalah";
  if (player == "gunting") return computer == "kertas" ? "Menang!" : "Kalah";
  if (player == "kertas") return computer == "batu" ? "Menang!" : "Kalah";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["batu", "gunting", "kertas"];
  const waktuAwal = new Date().getTime();
  let i = 0;
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanPlayer = pil.className;
    const pilihanComputer = getPilihanComputer();
    const hasil = getHasil(pilihanPlayer, pilihanComputer);
    const imgComputer = document.querySelector(".img-komputer");

    putar();
    setTimeout(function () {
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
//   const pilihanPlayer = pBatu.className;
//   const pilihanComputer = getPilihanComputer();
//   const hasil = getHasil(pilihanPlayer, pilihanComputer);
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", function () {
//   const pilihanPlayer = pGunting.className;
//   const pilihanComputer = getPilihanComputer();
//   const hasil = getHasil(pilihanPlayer, pilihanComputer);
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {
//   const pilihanPlayer = pKertas.className;
//   const pilihanComputer = getPilihanComputer();
//   const hasil = getHasil(pilihanPlayer, pilihanComputer);
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
