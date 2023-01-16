//Criar função para mudar o type do input

//Remover o class light de form e add o class dark

const passwordInput = document.getElementById("password");

const formulario = document.getElementById("formulario");

const escondeSenha = (event) => {
  event.preventDefault();
  passwordInput.setAttribute("type", "password");
};

formulario.classList.remove("light");
formulario.classList.add("dark");
