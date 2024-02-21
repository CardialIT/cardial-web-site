import React from "react";
import "./styles.css";
import LogoBranco from "../../assets/cardial-logo-branco.png"
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


function Footer() {
  return (
    <div className="container-footer">
      <div className="section-top">

        <div className="footer-left">
          <img src={LogoBranco} />

          <div className="links-footer">
            <a>Home</a>
            <a>Sobre Nós</a>
            <a>Produtos</a>
          </div>


        </div>

        <div className="footer-right">
          <p>Venha nos conhecer!</p>

          <button className="footer-button">Entrar em contato</button>

        </div>

      </div>



      <hr className="divider" />

      <div className="section-bottom">

        <div className="footer-left-bottom">
          <p>&copy; 2024 Cardial I.T. Todos os direitos reservados.</p>
          <p>Curitiba-PR</p>
        </div>


        <div className="section-buttons-bottom">
          <a className="button-social-media">
            <FaInstagram className="icon-social-media" />
          </a>

          <a className="button-social-media">
            <CiLinkedin className="icon-social-media" />
          </a>

        </div>

      </div>

    </div>
  );
}

export default Footer;
