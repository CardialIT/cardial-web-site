import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import Logo from "../../assets/passaro-pequeno-fundo-branco.png";
import "./styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Roll from "react-reveal/Roll";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};



  

  return (
    <header className="navbar">
      <div className="container-links">
    
      <div className="logo">
        <a href="/" target="_blank">
          <img src={Logo} className="logo-img" alt="Logo" />
        </a>
      </div>

      <div className="links">
 
          {/* <a className="link" href="#sobre">
            Sobre
          </a>
   
        

          <a className="link" href="#projetos">
            Produtos
          </a>
      

 
          <a className="link" href="#experiencia">
            Equipe
          </a> */}
    
        
      </div>

      </div>

      <Tilt
        className="tilt"
        options={{ max: 25 }}
        style={{ height: 50, width: 250 }}
      >
      <div className="botao">
        <a className="contato" href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20vim%20do%20Site%20da%20Cardial%20;)">
          ENTRAR EM CONTATO
        </a>
      </div>
      </Tilt>

{/* 
      <a  className="button-menu-hamburguer" onClick={toggleMenu}>
  <GiHamburgerMenu className="hamburguer-icon" />
</a> */}

<Roll right>
<div className={`popup-menu ${isOpen ? "open" : ""}`}>
  <div className="popup-menu-content">
  <button className="close-btn" onClick={toggleMenu}>
    X
  </button>
  <div className="links-responsive">
    <a href="#sobre">Sobre</a>
    <a href="#projetos">Produtos</a>
    <a href="#experiencia">Equipe</a>
    </div>
  </div>
</div>
</Roll>



    </header>
  );
}