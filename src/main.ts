const sachovnica = document.getElementById("sachovnica");
 
for (let riadok = 0; riadok < 8; riadok++) {
  for (let stlpec = 0; stlpec < 8; stlpec++) {
    const pole = document.createElement("div");
    pole.classList.add("pole");
 
    if ((riadok + stlpec) % 2 === 0) {
      pole.classList.add("svetle");
    } else {
      pole.classList.add("tmave");
    }
 
    sachovnica?.appendChild(pole);
  }
}