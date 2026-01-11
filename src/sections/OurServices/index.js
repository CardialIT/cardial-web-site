import React from "react";
import "./styles.css";
import {
  FiCode,
  FiSearch,
  FiCloud,
  FiZap,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { GiThorHammer } from "react-icons/gi";
import {
  MdOutlineDesignServices,
  MdSecurity,
  MdSupportAgent,
} from "react-icons/md";
import { FaRocket } from "react-icons/fa6";
import Tilt from "react-tilt";

export default function OurServices() {
  const services = [
    {
      title: "Criação de Sites e Apps",
      description:
        "Desenvolvemos aplicativos web e mobile performáticos que impulsionam seu negócio no presente e futuro.",
      icon: <FiCode />,
      features: ["Responsivo", "Performance", "UX/UI Moderno", "SEO Integrado"],
      color: "#cf4675",
    },
    {
      title: "Soluções SAAS",
      description:
        "Oferecemos sistemas SaaS feitos para o seu nicho, que simplificam operações, reduzem custos desde o primeiro dia e evoluem sem complicação.",
      icon: <FiCloud />,
      features: ["Corretoria", "Agronomia", "Varejo", "Direito"],
      color: "#cf4675",
    },
    {
      title: "Automação de Processos",
      description:
        "Automatize fluxos de trabalho repetitivos e libere tempo para estratégias e inovação.",
      icon: <FiZap />,
      features: [
        "Automação Web",
        "Coleta de Dados",
        "Mensagens Agendadas",
        "Dashboards Simples",
      ],
      color: "#cf4675",
    },
    {
      title: "Resgate & Evolução de Projeto",
      description:
        "Seu projeto parou ou desandou com outro programador? Nós fazemos uma avaliação completa, explicamos tudo claramente e colocamos nos trilhos, mantendo ou refazendo com qualidade, sem surpresas.",
      icon: <GiThorHammer />,
      features: [
        "Diagnóstico Transparente",
        "Manutenção ou Reconstrução",
        "Documentação Clara",
        "Entrega com Suporte",
      ],
      color: "#cf4675",
    },
    {
      title: "Presença Digital Completa",
      description:
        "Sua marca precisa aparecer? Criamos sua identidade visual (logo, cores), organizamos suas redes e WhatsApp Business, e entregamos uma landing page pronta para converter — um pacote completo e acessível.",
      icon: <FaRocket />,
      features: [
        "Logo & Criação de Marca",
        "Kit Redes Sociais",
        "WhatsApp Business Configurado",
        "Landing Page Pronta",
      ],
      color: "#cf4675",
    },
    {
      title: "Time Tech Sob Demanda",
      description:
        "Precisa de uma força extra no seu projeto? Disponibilizamos um especialista ou um time completo de tecnologia, integrado à sua operação, para acelerar entregas com qualidade e custo transparente.",
      icon: <MdSupportAgent />,
      features: [
        "Desenvolvedor Dedicado",
        "Integração com Seu Time",
        "Gestão Clara de Projetos",
        "Custo Mensal Fixo",
      ],
      color: "#cf4675",
    },
  ];

  // Função para gerar o link do WhatsApp com o serviço específico
  const generateWhatsAppLink = (serviceTitle) => {
    const baseUrl = "https://api.whatsapp.com/send?phone=5555999293516";
    const encodedMessage = encodeURIComponent(
      `Olá! Me interessei pelo seu serviço de ${serviceTitle}. Vi no seu site.`
    );
    return `${baseUrl}&text=${encodedMessage}`;
  };

  return (
    <section className="our-services" id="servicos">
      <div className="services-container">
        {/* Header com destaque */}
        <div className="services-header">
          <span className="section-badge">NOSSOS SERVIÇOS</span>
          <h2 className="section-title">
            Soluções <span className="gradient-text">Completas</span> para Seu
            <span className="gradient-text"> Sucesso Digital</span>
          </h2>
          <p className="section-subtitle">
            Combinamos tecnologia acessível e suporte humanizado para sua
            transformação digital, sem surpresas e ao preço justo.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="services-grid">
          {services.map((service, index) => (
            <Tilt
              key={index}
              className="tilt-card"
              options={{ max: 10, scale: 1.02, speed: 300 }}
            >
              <div
                className="service-card"
                style={{
                  "--card-color": service.color,
                  "--card-bg": `${service.color}15`,
                }}
              >
                {/* Ícone com efeito */}
                <div
                  className="service-icon-wrapper"
                  style={{ color: service.color }}
                >
                  <div
                    className="icon-background"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    {service.icon}
                  </div>
                  <div
                    className="icon-glow"
                    style={{ background: service.color }}
                  ></div>
                </div>

                {/* Conteúdo do card */}
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  {/* Lista de features */}
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheckCircle
                          className="feature-icon"
                          style={{ color: service.color }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rodapé do card */}
                <div className="service-footer">
                  <a
                    href={generateWhatsAppLink(service.title)}
                    className="service-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais
                    <FiArrowRight className="arrow-icon" />
                  </a>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="card-glow"></div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* CTA Principal */}
        <div className="services-cta-section">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Pronto para transformar suas ideias em realidade?</h3>
              <p>
                Contate-nos para entendermos sua ideia e realizar uma parceria.
                Estamos aqui para ajudar.
              </p>
            </div>
            <div className="cta-buttons">
              <a
                href="https://api.whatsapp.com/send?phone=5555999293516&text=Ol%C3%A1!%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os"
                className="cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiArrowRight className="cta-icon" />
                Conversar no WhatsApp
              </a>
              <a href="/portfolio" className="cta-button secondary">
                Ver Portfolio
                <FiArrowRight />
              </a>
            </div>
          </div>

          {/* Elementos decorativos */}
          <div className="cta-decoration">
            <div className="decoration-dot dot-1"></div>
            <div className="decoration-dot dot-2"></div>
            <div className="decoration-dot dot-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
