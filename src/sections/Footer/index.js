import React from "react";
import "./styles.css";
import LogoBranco from "../../assets/cardial-logo-branco.png"
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FiPhone, FiArrowRight } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Top Section - Main Content */}
      <div className="footer-top">
        <div className="footer-brand">
          <img src={LogoBranco} alt="Cardial I.T." className="footer-logo" />
          <p className="footer-tagline">Potencializando negócios com tecnologia de ponta e soluções inovadoras.</p>
          
          <div className="social-icons">
            <a 
              href="https://instagram.com" 
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="icon" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <CiLinkedin className="icon" />
            </a>
            <a 
              href="mailto:contato@cardial.com"
              className="social-icon"
              aria-label="Email"
            >
              <CiMail className="icon" />
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h3 className="contact-title">Vamos conversar?</h3>
          <p className="contact-subtitle">Pronto para transformar sua ideia em realidade.</p>
          
          <a 
            href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20vim%20do%20Site%20da%20Cardial%20;)"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Falar no WhatsApp
            <FiArrowRight className="arrow-icon" />
          </a>
          
          <div className="contact-info">
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>(41) 99674-5640</span>
            </div>
            <div className="contact-item">
              <CiMail className="contact-icon" />
              <span>contato@cardial.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Curitiba - PR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Quick Links */}
      <div className="footer-middle">
        <div className="footer-column">
          <h4 className="column-title">Serviços</h4>
          <a href="#servicos" className="footer-link">Desenvolvimento Web</a>
          <a href="#servicos" className="footer-link">Aplicativos Mobile</a>
          <a href="#servicos" className="footer-link">Consultoria Tech</a>
          <a href="#servicos" className="footer-link">Automação</a>
        </div>
        
        <div className="footer-column">
          <h4 className="column-title">Empresa</h4>
          <a href="#sobre" className="footer-link">Sobre Nós</a>
          <a href="#portfolio" className="footer-link">Portfólio</a>
          <a href="#depoimentos" className="footer-link">Depoimentos</a>
          <a href="#contato" className="footer-link">Contato</a>
        </div>
        
        <div className="footer-column">
          <h4 className="column-title">Recursos</h4>
          <a href="#blog" className="footer-link">Blog</a>
          <a href="#faq" className="footer-link">FAQ</a>
          <a href="#privacidade" className="footer-link">Política de Privacidade</a>
          <a href="#termos" className="footer-link">Termos de Uso</a>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Cardial I.T. Todos os direitos reservados.</p>
          <div className="location">
            <FaMapMarkerAlt className="location-icon" />
            <span>Curitiba - Paraná</span>
          </div>
        </div>
        
        <div className="footer-credits">
          <p>Desenvolvido com ❤️ pela Cardial</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;