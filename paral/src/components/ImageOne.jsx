import { Parallax } from "react-parallax";
import Nasa from "../img/nasa.jpg";
import portada from "../img/portada.jpg";

function ImageOne() {
  return (
    <>
      <Parallax
        className="image"
        blur={0}
        bgImage={portada}
        strength={800}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <div class="content">
          <h1 class="img-txt1">FÁTIMA</h1>
        </div>
        <div class="content">
          <h1 class="img-txt2">MIS QUINCE AÑOS</h1>
        </div>
        <div class="content">
          <h1 class='downAnimate'> {">"} </h1>
        </div>
      </Parallax>
    </>
  );
}
export default ImageOne;
