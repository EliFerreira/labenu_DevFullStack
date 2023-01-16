const lista = document.getElementById("lista");

const insereItem = (e) => {
  e.preventDefault();

  const addFruit = document.getElementById("meu-input").value;

  const newLi = document.createElement("li");
  newLi.innerHTML = addFruit;
  lista.appendChild(newLi);

  //limpar input
  document.getElementById("meu-input").value = "";
};
