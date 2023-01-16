// A partir do template, crie um código que leia o valor innerHTML do elementp P que está na página
const paragrafo = document.getElementById("paragrafo").innerHTML;

console.log(paragrafo);

//Utilize o input que está na página para digitar um novo valor e a cada vez que uma tecla for pressionada, imprima no console o valor atual do input

const imprimirValor = () => {
  console.log(document.getElementById("texto").value);
};

// const mudarValor = () => {
//     texto
// }
