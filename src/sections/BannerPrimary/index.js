import React from "react";
import "./styles.css";
import { FiSend } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TypeAnimation from "react-type-animation";
import Tilt from "react-tilt";
import bannerPrimaryImg from "../../assets/banner-primary.png";

function Highlights() {
  return (
    <div className="page-container">
      
    <div className="side-left">
      <div className="container-title-animate">
        <TypeAnimation
          cursor={true}
          sequence={["Potencializando seu negócio com tecnologia!", 10000, ""]}
          wrapper="h1"
          repeat={Infinity}
          className="animated-text"
        />

        <h1 className="title-banner">Potencializando seu negócio com tecnologia!</h1>
        </div>
    
     <p>
        Somos uma empresa de desenvolvimento de software, focada em soluções de
        prontidão e eficazes.</p>


        <Tilt
        className="tilt"
        options={{ max: 25 }}
        style={{ height: 50, width: 250 }}
      >
        <button className="button-insight">
       <a href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20vim%20do%20Site%20da%20Cardial%20;)">  Fale Conosco </a>
          <FiSend className="icon-send" />
        </button>
      </Tilt>
      </div>


 
      <div className="side-right">
        <img src={bannerPrimaryImg} alt="Banner" />
      </div>



    </div>
  );
}

export default Highlights;
