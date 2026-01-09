import React from "react";
import NavBar from "../../sections/NavBar";
import Footer from "../../sections/Footer";
import ReactWhatsappButton from "react-whatsapp-button";
import "./styles.css";
import { 
  FaRocket, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaCode, 
  FaHandshake,
  FaChartLine,
  FaLightbulb,
  FaSeedling,
  FaTree,
  FaMountain,
  FaNetworkWired,
  FaUserTie,
  FaShieldAlt,
  FaGlobeAmericas
} from "react-icons/fa";
import { FiTarget, FiTrendingUp, FiAward, FiCalendar } from "react-icons/fi";
import { GiBrazil, GiSouthAmericaFlag } from "react-icons/gi";

function AboutUs() {
  const timeline = [
    {
      year: "2023",
      title: "O Nascimento da Ideia",
      description: "A intuição empreendedora surgiu com o conhecimento em programação do fundador Thalis e a vontade de Iago em aprender na prática. O primeiro projeto foi desenvolvido para um dentista em Alegrete/RS.",
      icon: <FaSeedling />,
      location: "Alegrete - RS",
      color: "#2563eb"
    },
    {
      year: "2023",
      title: "Feira do Empreendedor & CNPJ",
      description: "Participação na Feira do Empreendedor de 2023 onde concretizamos a ideia e formalizamos a empresa com abertura do CNPJ da Cardial I.T.",
      icon: <FaHandshake />,
      location: "Alegrete - RS",
      color: "#10b981"
    },
    {
      year: "2024",
      title: "Expansão para Curitiba",
      description: "Com o retorno de Thalis para Alegrete, a empresa começou a conquistar seus primeiros clientes em Curitiba, acumulando experiência e credibilidade no mercado.",
      icon: <FaChartLine />,
      location: "Curitiba - PR",
      color: "#8b5cf6"
    },
    {
      year: "2025",
      title: "A Ascensão Nacional",
      description: "Ano marcante com 3 apps desenvolvidos (2 em Alegrete, 1 em Curitiba), 1 site em Caruaru/PE e 1 automação em Uruguaiana/RS. Crescimento nacional consolidado.",
      icon: <FaRocket />,
      location: "Nacional",
      color: "#f59e0b"
    },
    {
      year: "2026",
      title: "Foco em SAAS & Outsourcing",
      description: "Evolução para soluções SAAS escaláveis e oferta de equipe de TI como outsourcing. Preparação para parcerias estratégicas e expansão do portfólio.",
      icon: <FaNetworkWired />,
      location: "Brasil",
      color: "#ec4899"
    }
  ];

  const values = [
    {
      title: "Inovação com Propósito",
      description: "Não seguimos modismos. Desenvolvemos tecnologia que realmente resolve problemas e gera valor.",
      icon: <FaLightbulb />,
      color: "#3b82f6"
    },
    {
      title: "Aprendizado Contínuo",
      description: "Acreditamos que o crescimento profissional e empresarial vem do constante aprendizado na prática.",
      icon: <FiTrendingUp />,
      color: "#10b981"
    },
    {
      title: "Parceria de Verdade",
      description: "Não somos apenas prestadores, somos parceiros no sucesso dos nossos clientes.",
      icon: <FaHandshake />,
      color: "#f59e0b"
    },
    {
      title: "Qualidade Garantida",
      description: "Cada linha de código é escrita com excelência, pensando em performance e manutenibilidade.",
      icon: <FaShieldAlt />,
      color: "#8b5cf6"
    }
  ];

  const team = [
    {
      name: "Thalis",
      role: "Fundador & Tech Lead",
      description: "Intuição empreendedora aliada à expertise técnica. Visionário por natureza e executor por paixão.",
      expertise: ["Full-Stack", "Arquitetura de Software", "Estratégia Tech"],
      color: "#2563eb"
    },
    {
      name: "Iago",
      role: "Co-fundador & Dev Full-Stack",
      description: "Aprendizado acelerado na prática, transformando desafios em soluções inovadoras.",
      expertise: ["Frontend", "UI/UX", "Desenvolvimento Ágil"],
      color: "#10b981"
    }
  ];

  const services2026 = [
    {
      title: "SAAS Sob Demanda",
      description: "Sistemas em nuvem escaláveis para empresas que buscam digitalização completa.",
      icon: <FaUserTie />,
      features: ["Multi-tenant", "API First", "Escalabilidade", "Customização"]
    },
    {
      title: "Outsourcing de TI",
      description: "Equipe dedicada de desenvolvedores para complementar seu time interno.",
      icon: <FaUserTie />,
      features: ["Devs Dedicados", "Metodologias Ágeis", "Gestão Remota", "Resultados Mensuráveis"]
    },
    {
      title: "Parcerias Estratégicas",
      description: "Disponibilidade para ser sócio em projetos inovadores com grande potencial.",
      icon: <FaHandshake />,
      features: ["Equity", "Co-desenvolvimento", "Risco Compartilhado", "Crescimento Conjunto"]
    }
  ];

  return (
    <div className="about-container">
      <ReactWhatsappButton 
        countryCode="55" 
        phoneNumber="41996745640" 
        className="whatsapp-button"
      />
      <NavBar />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">
                Mais do que uma Empresa, uma 
                <span className="gradient-text"> História de Transformação</span>
              </h1>
              <p className="hero-subtitle">
                Da intuição à execução, do interior do RS para todo o Brasil. 
                Conheça nossa jornada de empreendedorismo, tecnologia e crescimento.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projetos Entregues</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Estados Atendidos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="story-section">
          <div className="section-header">
            <h2 className="section-title">
              Nossa <span className="gradient-text">Jornada</span>
            </h2>
            <p className="section-subtitle">
              Uma história de visão, coragem e transformação digital que começou 
              com uma simples ideia e se tornou realidade.
            </p>
          </div>

          <div className="story-timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year" style={{ backgroundColor: item.color }}>
                  <span>{item.year}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="timeline-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="timeline-location">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-connector"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Founders */}
        <section className="founders-section">
          <div className="section-header">
            <h2 className="section-title">
              Os <span className="gradient-text">Fundadores</span>
            </h2>
            <p className="section-subtitle">
              A combinação perfeita entre visão estratégica e execução técnica.
            </p>
          </div>

          <div className="founders-grid">
            {team.map((member, index) => (
              <div key={index} className="founder-card" style={{ borderTopColor: member.color }}>
                <div className="founder-header">
                  <div className="founder-avatar" style={{ backgroundColor: `${member.color}20` }}>
                    <span style={{ color: member.color }}>{member.name.charAt(0)}</span>
                  </div>
                  <div className="founder-info">
                    <h3>{member.name}</h3>
                    <p className="founder-role">{member.role}</p>
                  </div>
                </div>
                <p className="founder-description">{member.description}</p>
                <div className="founder-expertise">
                  <h4>Expertise</h4>
                  <div className="expertise-tags">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag" style={{ borderColor: member.color }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="founders-quote">
            <div className="quote-content">
              <FaChartLine className="quote-icon" />
              <p className="quote-text">
                "Acreditamos que a tecnologia deve servir às pessoas, não o contrário. 
                Nossa missão é criar soluções que realmente façam a diferença na vida 
                dos empreendedores brasileiros."
              </p>
              <div className="quote-author">
                <span>Thalis & Iago</span>
                <span>Fundadores da Cardial I.T.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section">
          <div className="section-header">
            <h2 className="section-title">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="section-subtitle">
              Princípios que guiam cada decisão, cada linha de código e cada parceria.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2026 Vision */}
        <section className="vision-section">
          <div className="section-header">
            <h2 className="section-title">
              Visão <span className="gradient-text">2026</span>
            </h2>
            <p className="section-subtitle">
              O futuro que estamos construindo hoje. Foco em escalabilidade e parcerias estratégicas.
            </p>
          </div>

          <div className="vision-content">
            <div className="vision-statement">
              <FaGlobeAmericas className="vision-globe" />
              <h3>Transformando Sonhos em Realidade Digital</h3>
              <p>
                Em 2026, consolidamos nossa posição como referência em desenvolvimento de SAAS 
                sob demanda no Brasil. Não apenas entregamos projetos, mas construímos parcerias 
                de longo prazo que transformam negócios.
              </p>
              <div className="vision-highlights">
                <div className="highlight">
                  <FiTarget />
                  <span>SAAS Escaláveis</span>
                </div>
                <div className="highlight">
                  <FaNetworkWired />
                  <span>Outsourcing de TI</span>
                </div>
                <div className="highlight">
                  <FaHandshake />
                  <span>Parcerias Estratégicas</span>
                </div>
              </div>
            </div>

            <div className="services-2026">
              {services2026.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Reach */}
        <section className="reach-section">
          <div className="section-header">
            <h2 className="section-title">
              Nossa <span className="gradient-text">Abordagem</span>
            </h2>
            <p className="section-subtitle">
              Do interior para o Brasil inteiro. Tecnologia sem fronteiras.
            </p>
          </div>

          <div className="reach-content">
            <div className="reach-map">
              <div className="map-point rs">
                <FaMapMarkerAlt />
                <div className="point-tooltip">
                  <strong>Rio Grande do Sul</strong>
                  <p>Projetos em Alegrete e Uruguaiana</p>
                </div>
              </div>
              <div className="map-point pr">
                <FaMapMarkerAlt />
                <div className="point-tooltip">
                  <strong>Paraná</strong>
                  <p>Clientes em Curitiba e região</p>
                </div>
              </div>
              <div className="map-point pe">
                <FaMapMarkerAlt />
                <div className="point-tooltip">
                  <strong>Pernambuco</strong>
                  <p>Site desenvolvido em Caruaru</p>
                </div>
              </div>
              <GiBrazil className="brazil-icon" />
            </div>

            <div className="reach-stats">
              <div className="reach-stat">
                <h4>Atendimento Nacional</h4>
                <p>Projetos entregues em 5 estados diferentes</p>
              </div>
              <div className="reach-stat">
                <h4>Trabalho Remoto</h4>
                <p>Eficiência comprovada no modelo 100% remoto</p>
              </div>
              <div className="reach-stat">
                <h4>Cultura Digital</h4>
                <p>Adaptação rápida às necessidades de cada região</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Faça Parte Dessa História</h2>
            <p>
              Seja como cliente, parceiro ou membro da equipe. Vamos construir 
              algo extraordinário juntos.
            </p>
            
            <div className="cta-buttons">
              <a 
                href="https://api.whatsapp.com/send?phone=5541996745640&text=Olá! Gostaria de conhecer mais sobre a Cardial e possíveis parcerias"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                <FaHandshake />
                Falar sobre Parceria
              </a>
              
              <a 
                href="https://api.whatsapp.com/send?phone=5541996745640&text=Olá! Tenho um projeto e gostaria de uma proposta"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <FaCode />
                Solicitar Proposta
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;