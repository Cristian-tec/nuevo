import useSound from "use-sound";
import musica from "../song/tema.mp3";
import { useState } from "react";
import icono from "../img/icono1.png";
import stop2 from "../img/stop.png";

function Reproductor() {
  const [play, { stop }] = useSound(musica);
  const [start, setStart] = useState(true);

  const reproducir = () => {
    start ? play() : stop();
    setStart(!start);
  };

  return (
    <>
      <div class="reproductor2">
        <img onClick={reproducir} class="animate" src={(start) ? icono : stop2} />
      </div>
    </>
  );
}
export default Reproductor;
