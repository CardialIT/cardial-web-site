import React from "react";
import "./styles.css";
import Roll from "react-reveal/Roll";
import DrGuerra from "../../assets/drguerra.png";

function OurProducts() {
  return (
    <div>
      {/* Deixei esse pra vcs ter um exemplo de como usar o efeito que vem do lado. */}
      <Roll right>
        <div className="description-biography">
          {/* <img src={DrGuerra} className="" /> */}
        </div>
      </Roll>
    </div>
  );
}

export default OurProducts;
