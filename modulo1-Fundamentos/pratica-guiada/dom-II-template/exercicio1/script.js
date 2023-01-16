//criar um elemento li
//add texto
//acrescentar ele na lista, um no começo e outro no fim

const lista = document.getElementById("lista");

const novoItem = document.createElement("li");
novoItem.innerHTML = "Item 0";
lista.insertAdjacentElement("afterbegin", novoItem);

const ultimoItem = document.createElement("li");
const texto = document.createTextNode("Item 5");
ultimoItem.appendChild(texto);

lista.appendChild(ultimoItem);

// function addElement() {
//   const newList = document.createElement("addLista");

//   const addTexto = document.createTextNode("AAAAAAAA");

//   addList.appendChild(addTexto);

//   const divExistente = document.getElementById("lista");

//   divExistente.insertAdjacentElement("beforebegin", addLista);
// }
// addElement();
