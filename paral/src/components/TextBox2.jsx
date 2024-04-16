import React from "react";
import fiesta from "../img/fiesta.svg";

function TextBox2() {

 let ubicacion = "https://www.google.com/maps/dir/-33.2727082,-66.2248175/la+cascada+salon+de+eventos/@-33.26671,-66.2547007,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95d43f82ddbf5d13:0xf5a217669af2d966!2m2!1d-66.2437474!2d-33.2584752?entry=ttu"
    
  
  return (
    <>
      <div class="text-box2">
        <img class="imgAnim" src={fiesta} alt="fiesta" />
        <h3 class="fiesta">FIESTA</h3>
        <h2>
          ¡Te espero el Sábado 14 de diciembre de 21:00 a 05:00 hs para festejar
          este gran momento de mi vida!{" "}
        </h2>
        <h2>Salón La Cascada. Las Chacras, Juana Koslay.</h2>
        <h2>
          Clickeá en el botón de abajo y encontrá las indicaciones para llegar,
          ¡nos vemos!😉
        </h2>
        <a href={ubicacion} target="_blank">
          <button>CÓMO LLEGAR</button>
          </a>
      </div>
    </>
  );
}

export default TextBox2;
