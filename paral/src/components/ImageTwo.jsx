import { Parallax } from "react-parallax";
import instagram from "../img/instagram.jpg";
import iconoInstagram from "../img/icono-instagram.svg";

function ImageTwo() {
  return (
    <>
      <Parallax
        className="image2"
        blur={0}
        bgImage={instagram}
        strength={800}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <div class="contentInsta">
          <img class="imgAnim" src={iconoInstagram} alt="fiesta" />
        </div>
        <div class="contentInsta">
          <h1>@fátima</h1>
          <h2>¡Preparate para esta gran fiesta!</h2>
          <h2>
            Seguime en mi cuenta de Instagram y etiquetame en tus fotos y
            videos.
          </h2>
          <button>VER INSTAGRAM</button>
        </div>
      </Parallax>
    </>
  );
}
export default ImageTwo;
