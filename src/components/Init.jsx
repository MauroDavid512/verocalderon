import React from "react";
import img from "../imgs/CAMBRÉ-007.jpg"

function Init() {
  return (
    <div className="containerinit">
      <img class="initImage" src={img} alt="" />
      <div className="textInit">
      <h1 class="nombreInit">VERO</h1>
      <div className="actriz">Actriz</div>
       <div className="infoadd">Bailarina ● Acróbata</div>
      </div>

    </div>
  );
}

export default Init;
