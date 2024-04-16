import React from "react";
import song from '../img/icono-canciones.svg'

function Fiesta() {
  return (
    <>
      <div class="text-box2">
        <img class="imgAnim" src={song} alt="fiesta" />
        <h3 class="fiesta">FIESTA</h3>
        <h2>
        ¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
        </h2>
        <a href="https://wa.link/ly0fv3" target="_blank"><button>SUGERIR CANCIÓN</button></a>
      </div>
    </>
  );
}

export default Fiesta;
