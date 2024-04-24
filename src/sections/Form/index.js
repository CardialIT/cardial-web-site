import React, { useState } from "react";
import FormIMG from "../../assets/FormIMG.png";
import Tilt from "react-tilt";
import "./styles.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      nome,
      email,
      telefone,
      mensagem,
    };
    emailjs
      .send(
        "service_z0v2eyh",
        "template_v6q1p9t",
        templateParams,
        "sCOo_zF7PkHihK_-V"
      )
      .then(
        (response) => {
          alert("Email enviado com sucesso!", response.status, response.text);
          setNome("");
          setEmail("");
          setTelefone("");
          setMensagem("");
        },
        (err) => {
          alert("Erro ao enviar email", err);
        }
      );
  }

  return (
    <div className="call-us" id="formulario">
      <div className="call-us-left">
        <img src={FormIMG} />
      </div>

      <form className="form" onSubmit={sendEmail}>
        <h2 className="h2Title">Fale Conosco</h2>

        <h3 className="section-txt-subtitle">
          Ganhe uma avaliação gratuita da sua ideia
        </h3>

        <label htmlFor="nome">Nome</label>

        <input
          className="input"
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="telefone">Telefone</label>

        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <Tilt className="tilt" options={{ max: 25 }}>
          <button href="/">ENVIAR MENSAGEM</button>
        </Tilt>
      </form>
    </div>
  );
};

export default ContactForm;
