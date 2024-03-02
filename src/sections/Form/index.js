import React, { useState } from "react";
import FormIMG from "../../assets/FormIMG.png";
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
   
      <div className="call-us" id="formulario">
        <div className="call-us-left">
          <img src={FormIMG} />
        </div>
    
        
            <form className="form" onSubmit={handleSubmit}>
              <h2 className="h2Title">Fale Conosco</h2>
            
              <h3 className="section-txt-subtitle">
                Ganhe uma avaliação gratuita da sua ideia
              </h3>
            
              <label htmlFor="nome">Nome</label>
             
                <input
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
               <Tilt
        className="tilt"
        options={{ max: 25 }}
     >
              <button href="/">ENVIAR MENSAGEM</button>
              </Tilt>
            </form>
      
        </div>


  );
};

export default ContactForm;
