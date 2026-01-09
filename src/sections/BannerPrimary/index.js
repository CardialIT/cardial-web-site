import React from "react";
import "./styles.css";
import { FiSend, FiArrowRight, FiChevronDown } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiNodedotjs } from "react-icons/si";
import TypeAnimation from "react-type-animation";
import Tilt from "react-tilt";
import bannerPrimaryImg from "../../assets/bannerPrimary.png";

function Highlights() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-container">
      <div className="side-left">
        <div className="badge-container">
          <span className="badge">
            <SiReact className="tech-icon" />
            <SiNextdotjs className="tech-icon" />
            <SiNodedotjs className="tech-icon" />
            Tecnologias Modernas
          </span>
        </div>

        <div className="container-title-animate">
          <TypeAnimation
            cursor={true}
            sequence={[
              "Potencializando seu negócio com tecnologia!",
              3000,
              "Soluções digitais sob medida!",
              3000,
              "Inovação em desenvolvimento de software!",
              3000
            ]}
            wrapper="h1"
            repeat={Infinity}
            className="animated-text"
          />
          <h1 className="title-banner">Potencializando seu negócio com tecnologia!</h1>
        </div>

        <p className="description">
          Somos especialistas em desenvolvimento de software com foco em 
          <span className="highlight-text"> soluções ágeis, eficazes</span> e 
          <span className="highlight-text"> resultados mensuráveis</span>. 
          Transformamos suas ideias em realidade digital.
        </p>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">+50</span>
            <span className="stat-label">Projetos Entregues</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">+98%</span>
            <span className="stat-label">Satisfação</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Suporte</span>
          </div>
        </div>

        <div className="cta-container">
          <Tilt
            className="tilt"
            options={{ max: 25, scale: 1.05 }}
            style={{ height: 60, width: 250 }}
          >
            <button className="button-primary">
              <a href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20vim%20do%20Site%20da%20Cardial%20;)">
                Fale Conosco 
                <FiSend className="icon-send" />
              </a>
            </button>
          </Tilt>

          <button className="button-secondary" onClick={scrollToContact}>
            Saiba Mais
            <FiArrowRight className="icon-arrow" />
          </button>
        </div>

        <div className="scroll-indicator">
          <FiChevronDown className="scroll-icon" />
          <span>Role para explorar</span>
        </div>
      </div>

      <div className="side-right">
        <div className="image-container">
          <div className="floating-element elem-1"></div>
          <div className="floating-element elem-2"></div>
          <div className="floating-element elem-3"></div>
          <img src={bannerPrimaryImg} alt="Desenvolvimento de Software" className="banner-image" />
        </div>
      </div>
    </div>
  );
}

export default Highlights;