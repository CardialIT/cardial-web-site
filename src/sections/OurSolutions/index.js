import React from "react";

import Phone from "../../assets/phone.png";
import Check from "../../assets/check.png";
import MockUp from "../../assets/mockup.png";
import Couple from "../../assets/couple.png";
import Lightning from "../../assets/lightning.png";
import Mail from "../../assets/mail.png";
import LoremIpsum from "../../assets/lorem-ipsum.png";
import Tilt from "react-tilt";
import Roll from "react-reveal/Roll";

import "./styles.css";

function OurSolutions() {
  return (
    <>
      <div className="section">
        <div className="main-title">
          <h3 className="secondary-title">Nossas Soluções</h3>
          <h1 className="subtitle">Conheça algumas das nossas soluções</h1>
          <p className="text">
            Descubra o poder da tecnologia conosco e transforme seus desafios em
            oportunidades. Sua jornada para a excelência começa aqui.
          </p>
        </div>
        <Roll right> 
        <div className="section-one">
          <div className="section-txt">
            <img src={Phone} />

            <h1 className="section-txt-title">App Indiki</h1>

            <h3 className="section-txt-subtitle">
              Aplicativo Mobile de Indicações pode ser moldado para qualquer
              tipo de negocio.
            </h3>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Expanda seu Negócio
            </p>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Clientes em Foco
            </p>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Crescimento Estratégico
            </p>
            <Tilt
        className="tilt"
        options={{ max: 25 }}
        style={{ height: 50, width: 250 }}
      >
            <button href="/">SAIBA MAIS</button>
            </Tilt>
          </div>

          <div id="section-mockup"className="section-img">
            <img src={MockUp} />
          </div>
        </div>
        </Roll>

        <Roll left>

        <div className="second-section">
          <div className="left-img">
            <img src={Couple} />
          </div>

          <div className="section-right">
            <img className="iconLight" src={Lightning} />
            <h1 className="section-txt-title">
              Desenvolvimento de Apps Sob Medida
            </h1>

            <h3 className="section-txt-subtitle">
              Crie Apps Inovadores, Adaptados Exclusivamente para Você. Inovação
              e Funcionalidade, Tudo em Um Só Lugar.
            </h3>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Personalização exclusiva
            </p>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Inovação Garantida
            </p>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Design Funcional
            </p>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Soluções Integradas
            </p>
            <Tilt
        className="tilt"
        options={{ max: 25 }}
        style={{ height: 50, width: 250 }}
      >
            <button href="/">SAIBA MAIS</button>
            </Tilt>
          </div>
        </div>
        </Roll>

        <Roll right>
        <div className="section-web-d">
          <div className="section-txt">
            <img src={Mail} />

            <h1 className="section-txt-title">Cardial Web Design</h1>

            <h3 className="section-txt-subtitle">
              Eleve sua Presença Online com Landing Pages Responsivas,
              Estratégicas e um Design Cativante. Alcance Seu Público com Nossas
              Poderosas Estratégias SEO.
            </h3>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Design Moderno
            </p>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              Landing Pages Estratégicas
            </p>

            <p className="textP">
              <img className="text-item-img" src={Check} alt="Check Icon" />
              SEO Poderoso
            </p>
            <Tilt
        className="tilt"
        options={{ max: 25 }}
        style={{ height: 50, width: 250 }}
      >
            <button href="/">SAIBA MAIS</button>
            </Tilt>
          </div>

          <div className="section-img">
            <img src={LoremIpsum} />
          </div>
        </div>
        </Roll>
      </div>
    </>
  );
}

export default OurSolutions;
