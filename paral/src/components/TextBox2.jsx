import React from "react";
import fiesta from "../img/fiesta.svg";

function TextBox2() {
  return (
    <>
      <div class="text-box2">
        <img class="imgAnim" src={fiesta} alt="fiesta" />
        <h3 class="fiesta">FIESTA</h3>
        <h2>
          ¡Te espero el Sábado 14 de diciembre de 21:00 a 05:00 hs para festejar
          este gran momento de mi vida!{" "}
        </h2>
        <h2>Salón La Cascada, Ruta Av. 7 km 6, Juana Koslay.</h2>
        <h2>
          Clickeá en el botón de abajo y encontrá las indicaciones para llegar,
          ¡nos vemos!😉
        </h2>
        <button>CÓMO LLEGAR</button>
      </div>
    </>
  );
}

export default TextBox2;
