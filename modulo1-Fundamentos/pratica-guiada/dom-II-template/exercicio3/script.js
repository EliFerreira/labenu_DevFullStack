//Utilizando eventos verifique se o usuário está segurando Shif enquanto digita, caso sim, altere o valor do parágrafo para: ATENÇÃO, SEGURANDO SHIF, cano não, o parágrafo volta a estar vazio.
const paragrafo = document.getElementById("mensagem");
const checaCaps = (event) => {
  if (event.shiftKey) {
    paragrafo.innerHTML = "ATENÇÃO, SEGURANDO SHIF";
  } else {
    paragrafo.innerHTML = "";
  }
};
