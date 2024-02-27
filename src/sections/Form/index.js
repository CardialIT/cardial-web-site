import React, { useState } from "react";
import FormIMG from "../../assets/FormIMG.jpg";
import Tilt from "react-tilt";
import "./styles.css";

const ContactForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Telefone:", telefone);
    console.log("Mensagem:", mensagem);
  };

  return (
    <div className="section">
      <div className="second-section">
        <div className="left-img">
          <img src={FormIMG} />
        </div>
        <div className="formLayout">
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <h2 className="h2Title">Fale Conosco</h2>
              <h3 className="section-txt-subtitle">
                Ganhe uma avaliação gratuita da sua ideia
              </h3>
              <label htmlFor="nome">Nome</label>
              <div className="input-container">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <span className="input-message">Seu nome</span>
              </div>
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-message">
                  Digite seu endereço de email
                </span>
              </div>
              <label htmlFor="telefone">Telefone</label>
              <div className="input-container">
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
                <span className="input-message">9999-9999</span>
              </div>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
              <button href="/">ENVIAR MENSAGEM</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
