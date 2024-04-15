import { Parallax } from "react-parallax";
import spaceStation from "../img/spaceStation.jpeg";
function ImageThree() {
  return (
    <>
      <Parallax
        className="image"
        blur={0}
        bgImage={spaceStation}
        strength={800}
        bgImageStyle={{ height: "50px", opacity: ".5" }}
      ></Parallax>
      <div className="content">
        <span className="img-txt">a trip to Space</span>
      </div>
    </>
  );
}
export default ImageThree;
