import React from "react";
import "./styles.css";
import { FiCode, FiSearch, FiCloud, FiZap, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { MdOutlineDesignServices, MdSecurity, MdSupportAgent } from "react-icons/md";
import Tilt from "react-tilt";

export default function OurServices() {
  const services = [
    {
      title: "Criação de Sites e Apps",
      description: "Desenvolvemos aplicativos web e mobile performáticos que impulsionam seu negócio no presente e futuro.",
      icon: <FiCode />,
      features: ["Responsivo", "Performance", "UX/UI Moderno", "SEO Integrado"],
      color: "#2563eb"
    },
    {
      title: "Otimização SEO",
      description: "Posicionamento estratégico no Google para aumentar sua visibilidade e atrair clientes qualificados.",
      icon: <FiSearch />,
      features: ["Análise de Keywords", "SEO Técnico", "Conteúdo Otimizado", "Ranking"],
      color: "#10b981"
    },
    {
      title: "Soluções SAAS",
      description: "Sistemas em nuvem escaláveis que crescem com seu negócio e reduzem custos operacionais.",
      icon: <FiCloud />,
      features: ["Escalável", "Multi-tenant", "API First", "Cloud Native"],
      color: "#8b5cf6"
    },
    {
      title: "Automação de Processos",
      description: "Automatize fluxos de trabalho repetitivos e libere tempo para estratégias e inovação.",
      icon: <FiZap />,
      features: ["RPA", "Integrações", "Workflows", "Analytics"],
      color: "#f59e0b"
    },
    {
      title: "Design & UX/UI",
      description: "Interfaces intuitivas e experiências digitais que encantam e convertem seus usuários.",
      icon: <MdOutlineDesignServices />,
      features: ["Prototipagem", "User Research", "Design System", "Testes A/B"],
      color: "#ec4899"
    },
    {
      title: "Consultoria Tech",
      description: "Estratégia tecnológica personalizada para otimizar operações e maximizar ROI.",
      icon: <MdSupportAgent />,
      features: ["Tech Audit", "Arquitetura", "DevOps", "Segurança"],
      color: "#3b82f6"
    }
  ];

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
            Oferecemos expertise técnica combinada com estratégia de negócios para 
            entregar resultados mensuráveis e transformação digital real.
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
                  '--card-color': service.color,
                  '--card-bg': `${service.color}15`
                }}
              >
                {/* Ícone com efeito */}
                <div className="service-icon-wrapper" style={{ color: service.color }}>
                  <div className="icon-background" style={{ backgroundColor: `${service.color}20` }}>
                    {service.icon}
                  </div>
                  <div className="icon-glow" style={{ background: service.color }}></div>
                </div>

                {/* Conteúdo do card */}
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  {/* Lista de features */}
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheckCircle className="feature-icon" style={{ color: service.color }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rodapé do card */}
                <div className="service-footer">
                  <button className="service-cta">
                    Saiba mais
                    <FiArrowRight className="arrow-icon" />
                  </button>
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
              <p>Agende uma consultoria gratuita e receba uma proposta personalizada.</p>
            </div>
            <div className="cta-buttons">
              <a 
                href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os"
                className="cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiArrowRight className="cta-icon" />
                Conversar no WhatsApp
              </a>
              <a href="#portfolio" className="cta-button secondary">
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

        {/* Estatísticas */}
        <div className="services-stats">
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">Projetos Entregues</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Satisfação</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Suporte</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Tecnologias</span>
          </div>
        </div>
      </div>
    </section>
  );
}