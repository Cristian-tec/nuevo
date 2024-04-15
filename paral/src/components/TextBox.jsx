import React from "react";
import { useState } from "react";
import { timeLeft, nextYear } from "../utilCounter.js";

function TextBox() {
  const [time, setTimer] = useState(timeLeft());

  setInterval(() => {
    setTimer(timeLeft());
  }, 1000);

  return (
    <>
      <div class="text-box">
        <h2 class="classh3">Faltan:</h2>
        <h2 class="font400">{time.days} días,{" "}{time.hours} hs,{" "}{time.minutes} m,{" "}{time.seconds}s</h2>
      </div>
    </>
  );
}

export default TextBox;
