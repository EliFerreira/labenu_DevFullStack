// 1 Primeiro, vamos criar um componente para representar o Card de Vídeo. Chame-o de CardVideo. Para facilitar nosso trabalho, crie este Componente em um arquivo chamado CardVideo.js. Agora, os cards de vídeo serão chamados por meio deste componente. Portanto, altere os elementos HTML que foram criados no nosso App.js, para que ao invés de serem HTML, serem o componente CardVideo. Todos os vídeos terão a mesma aparência, mas enquanto não conhecemos props (matéria da próxima aula), podemos deixar assim.

import React from "react";
import InfoUsuario from "./InfosUsuario";

export function CardVideo() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src="https://picsum.photos/400/400?a=1 " alt="" />

      <h4>{titulo}</h4>
      <InfoUsuario />
    </div>
  );
}

/* <section className="painel-de-videos">
<div className="box-pagina-principal" onClick={reproduzVideo}>
  <img src="https://picsum.photos/400/400?a=1 " alt="" />
  <h4>{titulo}</h4>
</div>
<div className="box-pagina-principal" onClick={reproduzVideo}>
  <img src="https://picsum.photos/400/400?a=2 " alt="" />
  <h4>{titulo}</h4>
</div>
<div className="box-pagina-principal" onClick={reproduzVideo}>
  <img src="https://picsum.photos/400/400?a=3 " alt="" />
  <h4>{titulo}</h4>
</div>
<div className="box-pagina-principal" onClick={reproduzVideo}>
  <img src="https://picsum.photos/400/400?a=4 " alt="" />
  <h4>{titulo}</h4>
</div>
<div className="box-pagina-principal" onClick={reproduzVideo}>
  <img src="https://picsum.photos/400/400?a=5 " alt="" />
  <h4>{titulo}</h4>
</div>
<div className="box-pagina-principal" onClick={reproduzVideo}>
  <img src="https://picsum.photos/400/400?a=6 " alt="" />
  <h4>{titulo}</h4>
</div>
<div className="box-pagina-principal" onClick={reproduzVideo}>
  <img src="https://picsum.photos/400/400?a=7 " alt="" />
  <h4>{titulo}</h4>
</div>
<div className="box-pagina-principal" onClick={reproduzVideo}>
  <img src="https://picsum.photos/400/400?a=8 " alt="" />
  <h4>{titulo}</h4>
</div>
</section> */
