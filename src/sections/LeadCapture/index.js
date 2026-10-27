import React, { useState } from "react";
import "./styles.css";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiSend, FiUser, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";

export default function LeadCapture() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [ideia, setIdeia] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handlePhoneChange = (e) => {
    setTelefone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!nome.trim() || !telefone.trim() || !email.trim() || !ideia.trim()) {
      setErrorMsg("Por favor, preencha todos os campos para enviarmos sua proposta.");
      return;
    }

    setIsSubmitting(true);

    // 1. Monta a mensagem estruturada para o WhatsApp do Thalis
    const textoWhatsapp = [
      "Olá Thalis! Vim pelo site da *Cardial I.T.* e gostaria de conversar sobre uma ideia de software.",
      "",
      `*Nome:* ${nome.trim()}`,
      `*Telefone:* ${telefone.trim()}`,
      `*E-mail:* ${email.trim()}`,
      `*Ideia de Solução:* ${ideia.trim()}`,
    ].join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5555999293516&text=${encodeURIComponent(
      textoWhatsapp
    )}`;

    // Abre o WhatsApp imediatamente no clique do usuário (evita bloqueio de pop-up)
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // 2. Dispara o e-mail para thalisantunes100@gmail.com sem precisar de backend
    try {
      await fetch("https://formsubmit.co/ajax/thalisantunes100@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🚀 Novo Lead no Site Cardial I.T. - ${nome.trim()}`,
          Nome: nome.trim(),
          Telefone: telefone.trim(),
          Email: email.trim(),
          "Ideia de Solução em Software": ideia.trim(),
          Origem: "Formulário Página Inicial - cardialit.com.br",
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch (err) {
      console.error("Aviso ao disparar notificação por e-mail:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setNome("");
      setTelefone("");
      setEmail("");
      setIdeia("");
    }
  };

  return (
    <section className="lead-capture-section" id="contact">
      <div className="lead-capture-container">
        <div className="lead-capture-grid">
          {/* Coluna da Esquerda - Copy & Benefícios */}
          <div className="lead-info-col">
            <span className="lead-badge">
              <FaLightbulb className="lead-badge-icon" />
              TIRE SUA IDEIA DO PAPEL
            </span>

            <h2 className="lead-title">
              Tem uma Ideia de{" "}
              <span className="lead-gradient-text">Software ou Aplicativo?</span>
            </h2>

            <p className="lead-subtitle">
              Conte para nós o que você deseja construir. Analisamos a viabilidade
              do seu projeto gratuitamente e entramos em contato para transformar
              sua necessidade em uma solução real.
            </p>

            <div className="lead-benefits">
              <div className="lead-benefit-item">
                <div className="lead-benefit-icon">
                  <FaRocket />
                </div>
                <div className="lead-benefit-text">
                  <h4>Orçamento & Diagnóstico Gratuito</h4>
                  <p>Entendemos seu cenário e propomos a arquitetura ideal sem compromisso.</p>
                </div>
              </div>

              <div className="lead-benefit-item">
                <div className="lead-benefit-icon">
                  <FaWhatsapp />
                </div>
                <div className="lead-benefit-text">
                  <h4>Atendimento Ágil e Direto</h4>
                  <p>Sem robôs ou burocracia: você fala direto com quem projeta e desenvolve.</p>
                </div>
              </div>

              <div className="lead-benefit-item">
                <div className="lead-benefit-icon">
                  <FaShieldAlt />
                </div>
                <div className="lead-benefit-text">
                  <h4>Apps (iOS & Android), Sistemas Web e IA</h4>
                  <p>Experiência comprovada com soluções publicadas nas lojas oficiais.</p>
                </div>
              </div>
            </div>

            <div className="lead-location-tag">
              <FaMapMarkerAlt className="lead-location-icon" />
              <span>Cidade Baixa, Porto Alegre - RS • Atendemos todo o Brasil</span>
            </div>
          </div>

          {/* Coluna da Direita - Formulário de Captação */}
          <div className="lead-form-col">
            <div className="lead-form-card">
              {submitted ? (
                <div className="lead-success-box">
                  <div className="lead-success-icon">
                    <FaCheckCircle />
                  </div>
                  <h3>Interesse Registrado com Sucesso!</h3>
                  <p>
                    Enviamos os detalhes da sua ideia para o nosso e-mail e
                    abrimos o WhatsApp para iniciarmos nossa conversa agora mesmo.
                  </p>
                  <button
                    type="button"
                    className="lead-submit-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar outra ideia
                  </button>
                </div>
              ) : (
                <>
                  <div className="lead-form-header">
                    <h3>Solicitar Avaliação Gratuita</h3>
                    <p>Preencha os dados abaixo e receba nosso retorno imediato</p>
                  </div>

                  {errorMsg && <div className="lead-error-alert">{errorMsg}</div>}

                  <form className="lead-form" onSubmit={handleSubmit}>
                    <div className="lead-field-group">
                      <label htmlFor="lead-nome">
                        <FiUser className="field-icon" /> Seu Nome
                      </label>
                      <input
                        id="lead-nome"
                        type="text"
                        placeholder="Ex: João Silva"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                      />
                    </div>

                    <div className="lead-field-row">
                      <div className="lead-field-group">
                        <label htmlFor="lead-telefone">
                          <FiPhone className="field-icon" /> Telefone / WhatsApp
                        </label>
                        <input
                          id="lead-telefone"
                          type="tel"
                          placeholder="(51) 99999-9999"
                          value={telefone}
                          onChange={handlePhoneChange}
                          required
                        />
                      </div>

                      <div className="lead-field-group">
                        <label htmlFor="lead-email">
                          <FiMail className="field-icon" /> Seu E-mail
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          placeholder="contato@empresa.com.br"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="lead-field-group">
                      <label htmlFor="lead-ideia">
                        <FiMessageSquare className="field-icon" /> Sua ideia de solução em software
                      </label>
                      <textarea
                        id="lead-ideia"
                        rows="4"
                        placeholder="Conte um pouco sobre o aplicativo, sistema web ou automação que você quer criar..."
                        value={ideia}
                        onChange={(e) => setIdeia(e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="lead-submit-btn"
                      disabled={isSubmitting}
                    >
                      <FaWhatsapp className="btn-wa-icon" />
                      <span>
                        {isSubmitting
                          ? "Enviando dados..."
                          : "Enviar Ideia e Falar no WhatsApp"}
                      </span>
                      <FiSend className="btn-send-icon" />
                    </button>

                    <p className="lead-privacy-note">
                      🔒 Seus dados estão seguros. Ao enviar, você será direcionado ao
                      nosso WhatsApp e nossa equipe receberá sua solicitação por e-mail.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
