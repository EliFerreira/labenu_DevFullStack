const sapo = document.getElementById("sapo");
console.log(sapo);
sapo.innerHTML += " pé";
console.log(sapo.innerHTML); //innerHTML mostra apenas o que está dentro da tag

const poema = document.getElementById("poema");
poema.innerHTML = "Vou negando as aparências, disfarçando as evidências";
console.log(poema.innerHTML);

const sabedoria = document.getElementById("sabedoria");
sabedoria.innerHTML = "Mais vale um pássaro na mão do que dois voando";

const borboleta = document.getElementById("borboleta");
borboleta.innerHTML =
  "Poti-poti, perna de pau, olho de vidro e nariz de pica-pau";

const roberto = (document.getElementById("roberto").innerHTML =
  "e chorei ou se sorri, o importante é que emoções eu vivi");
