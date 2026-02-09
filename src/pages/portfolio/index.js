import React, { useState } from "react";
import NavBar from "../../sections/NavBar";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Footer from "../../sections/Footer";
import Testimonials from "../../sections/Testimonials";
import ReactWhatsappButton from "react-whatsapp-button";
import cleuzaImg from "../../assets/cleuza.png";
import adrianaImg from "../../assets/adriana.png";
import laurenceImg from "../../assets/laurence.png";
import maykelImg from "../../assets/maykel.png";
import "./styles.css";
import {
  FaMobileAlt,
  FaDesktop,
  FaCode,
  FaRobot,
  FaCloud,
  FaWhatsapp,
  FaStore,
  FaTruck,
  FaHeartbeat,
  FaChartLine,
  FaGamepad,
  FaShoppingCart,
  FaLeaf,
  FaBuilding,
  FaCalendarCheck,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaDownload,
  FaExternalLinkAlt,
  FaServer,
} from "react-icons/fa";
import { FiDollarSign, FiUsers, FiZap, FiMessageSquare } from "react-icons/fi";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const categories = [
    { id: "all", label: "Todos", icon: <FaCode /> },
    { id: "mobile", label: "Apps Mobile", icon: <FaMobileAlt /> },
    { id: "web", label: "Sites & Sistemas Web", icon: <FaDesktop /> },
    { id: "saas", label: "Sistemas SAAS", icon: <FaCloud /> },
    { id: "automation", label: "Automação", icon: <FaRobot /> },
  ];

  const projects = [
    {
      id: 1,
      title: "App Ruminar Leite",
      category: "mobile",
      client: "Agroindústria",
      description:
        "Aplicativo para gestão de produção leiteira com controle de rebanho, produção e qualidade.",
      image: laurenceImg,
      features: [
        "Controle de Rebanho",
        "Gestão de Produção",
        "Relatórios Avançados",
        "Offline Sync",
      ],
      price: "R$ 8.500 + R$ 400/mês",
      status: "publicado",
      playStore:
        "https://play.google.com/store/apps/details?id=com.thalis.ruminar_leite&hl=pt_BR",
      badge: "🏥 Em Produção",
    },
    {
      id: 2,
      title: "Site Adriana Rudá Imóveis",
      category: "web",
      client: "Corretora de Imóveis",
      description:
        "Site institucional com catálogo de imóveis, SEO otimizado e design responsivo premium.",
      image: adrianaImg,
      features: [
        "Catálogo de Imóveis",
        "SEO Avançado",
        "Design Responsivo",
        "Formulário de Contato",
      ],
      price: "R$ 5.900 + R$ 300/mês",
      status: "publicado",
      website: "https://www.adriarrudaimoveis.com.br/",
      badge: "🏥 Em Produção",
    },
    {
      id: 3,
      title: "Sistema Truckage",
      category: "mobile",
      client: "Transportadora",
      description:
        "Sistema completo para gestão de frotas, rastreamento e logística inteligente.",
      image: maykelImg,
      features: [
        "Gestão de Frotas",
        "Rastreamento GPS",
        "Cálculo de Rotas",
        "Relatórios Financeiros",
      ],
      price: "R$ 12.000 + R$ 600/mês",
      status: "desenvolvimento",
      playStore:
        "https://play.google.com/store/apps/details?id=com.cardial.truckage&hl=pt_BR",
      badge: "🏥 Em Produção",
    },
    {
      id: 4,
      title: "App Clínica Cleuza Canan",
      category: "mobile",
      client: "Clínica Terapêutica",
      description:
        "Aplicativo para gestão terapêutica com acompanhamento de pacientes e tarefas.",
      image: cleuzaImg,
      features: [
        "Gestão de Pacientes",
        "Agendamentos",
        "Tarefas Terapêuticas",
        "Relatórios",
      ],
      price: "R$ 7.500 + R$ 350/mês",
      status: "publicado",
      playStore:
        "https://play.google.com/store/apps/details?id=com.thalisantunes.clinicacleuzacanan&hl=pt_BR",
      badge: "🏥 Em Produção",
    },
    // {
    //   id: 5,
    //   title: "Marketplace PDV",
    //   category: "saas",
    //   client: "Varejo",
    //   description: "Plataforma completa de marketplace com PDV integrado e gestão de múltiplos vendedores.",
    //   image: "https://via.placeholder.com/400x250/F39C12/FFFFFF?text=Marketplace+PDV",
    //   features: ["PDV Completo", "Multi-vendedores", "Gestão de Estoque", "Relatórios"],
    //   price: "R$ 15.000 + R$ 800/mês",
    //   status: "disponivel",
    //   demo: "https://front-pdv-two.vercel.app/",
    //   badge: "🛒 Demonstração Online"
    // },
    // {
    //   id: 6,
    //   title: "Plataforma Agronomo",
    //   category: "saas",
    //   client: "Agronegócio",
    //   description: "Sistema especializado para consultoria agronômica com gestão de fazendas e cultivos.",
    //   image: "https://via.placeholder.com/400x250/16A085/FFFFFF?text=Plataforma+Agrônomo",
    //   features: ["Gestão de Fazendas", "Controle de Cultivos", "Recomendações Técnicas", "Relatórios"],
    //   price: "R$ 10.500 + R$ 500/mês",
    //   status: "disponivel",
    //   demo: "https://plataforma-agronomo.vercel.app/",
    //   badge: "🌱 Demonstração Online"
    // },
    // {
    //   id: 7,
    //   title: "E-commerce Multi-vendedor",
    //   category: "saas",
    //   client: "Marketplace",
    //   description: "Plataforma de e-commerce escalável para múltiplos vendedores com sistema de comissões.",
    //   image: "https://via.placeholder.com/400x250/8E44AD/FFFFFF?text=E-commerce+Multi",
    //   features: ["Multi-vendedores", "Sistema de Comissões", "Checkout Seguro", "Dashboard Admin"],
    //   price: "R$ 18.000 + R$ 900/mês",
    //   status: "disponivel",
    //   demo: "https://e-commerce-one-nu-49.vercel.app/",
    //   badge: "🏪 Loja Online"
    // },
    // {
    //   id: 8,
    //   title: "App Sindicato de Lojas",
    //   category: "mobile",
    //   client: "Sindicato Comercial",
    //   description: "Sistema de pontuação e benefícios para associados com gamificação e recompensas.",
    //   image: "https://via.placeholder.com/400x250/3498DB/FFFFFF?text=App+Sindicato",
    //   features: ["Sistema de Pontos", "Gamificação", "Benefícios", "Notificações Push"],
    //   price: "R$ 9.000 + R$ 450/mês",
    //   status: "em-breve",
    //   badge: "🎮 Em Breve"
    // }
    //
  ];

  const services = [
    {
      title: "Desenvolvimento de Apps",
      description: "Apps nativos e híbridos para iOS e Android",
      icon: <FaMobileAlt />,
      price: "A partir de R$ 10.000",
      features: ["UI/UX Design", "Desenvolvimento", "Publicação", "Manutenção"],
    },
    {
      title: "Sites & Sistemas Web",
      description: "Sites responsivos e sistemas web sob medida",
      icon: <FaDesktop />,
      price: "A partir de R$ 10.000",
      features: ["Design Responsivo", "SEO Otimizado", "Hospedagem", "Suporte"],
    },

    {
      title: "Automação de Processos",
      description: "Robôs e integrações inteligentes",
      icon: <FaRobot />,
      price: "A partir de R$ 5.000",
      features: ["Web Scraping", "Integrações", "Chatbots", "Workflows"],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <ReactWhatsappButton
        countryCode="55"
        phoneNumber="55999293516"
        className="whatsapp-button"
      />
      <NavBar />

      <main className="portfolio-main">
        {/* Hero Section com Partículas */}
        <section className="portfolio-hero">
          {/* Componente de Partículas */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 50,
                },
                opacity: {
                  value: 0.3,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />

          <div className="hero-content">
            <h1 className="hero-title">
              Nossos <span className="gradient-text">Projetos</span> que
              <span className="gradient-text"> Transformam</span>
            </h1>
            <p className="hero-subtitle">
              Conheça nossas soluções digitais que impulsionam negócios em
              diversos segmentos. Da ideia à realidade, entregamos excelência em
              cada linha de código.
            </p>
            <a href="#precos" className="hero-cta">
              Ver Planos e Preços
              <FaArrowRight className="cta-icon" />
            </a>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-grid-section">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                 
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-category">
                      {project.category === "mobile" && <FaMobileAlt />}
                      {project.category === "web" && <FaDesktop />}
                      {project.category === "saas" && <FaCloud />}
                      {project.category === "automation" && <FaRobot />}
                    </span>
                  </div>

                  <p className="project-client">
                    <strong>Cliente:</strong> {project.client}
                  </p>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    {project.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <div className="project-price">
                      <FiDollarSign />
                      <span>{project.price}</span>
                    </div>

                    <div className="project-actions">
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn store-btn"
                        >
                          <FaDownload />
                          Play Store
                        </a>
                      )}

                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn website-btn"
                        >
                          <FaExternalLinkAlt />
                          Visitar Site
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn demo-btn"
                        >
                          <FaExternalLinkAlt />
                          Ver Demo
                        </a>
                      )}

                      {!project.playStore &&
                        !project.website &&
                        !project.demo && (
                          <a
                            href="https://api.whatsapp.com/send?phone=5555992935160&text=Olá! Gostaria de saber mais sobre este projeto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn whatsapp-btn"
                          >
                            <FaWhatsapp />
                            Saber Mais
                          </a>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Testimonials />

        {/* Pricing Section */}
        <section className="pricing-section" id="precos">
          <div className="section-header">
            <h2 className="section-title">Planos e Investimentos</h2>
            <p className="section-subtitle">
              Soluções personalizadas para cada necessidade. Todos os planos
              incluem suporte e manutenção.
            </p>
          </div>

          <div className="pricing-grid">
            {services.map((service, index) => (
              <div key={index} className="pricing-card">
                <div className="pricing-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>

                <div className="pricing-price">
                  <span className="price-value">{service.price}</span>
                  {service.price.includes("/hora") && (
                    <span className="price-note">
                      + custos de infraestrutura
                    </span>
                  )}
                </div>

                <div className="pricing-features">
                  <h4>Inclui:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://api.whatsapp.com/send?phone=5555992935160&text=Olá! Gostaria de saber mais sobre os planos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-cta"
                >
                  <FaWhatsapp />
                  Solicitar Orçamento
                </a>
              </div>
            ))}
          </div>

          {/* <div className="pricing-info">
            <div className="info-card">
              <h4>📋 Modelo de Cobrança</h4>
              <ul>
                <li>
                  <strong>Desenvolvimento:</strong> Valor único ou parcelado
                </li>
                <li>
                  <strong>Manutenção:</strong> Mensalidade a partir de R$
                  300/mês
                </li>
                <li>
                  <strong>Suporte:</strong> R$ 30/hora (horário comercial)
                </li>
                <li>
                  <strong>Escalonamento:</strong> +R$ 2/user acima de 100
                  usuários
                </li>
              </ul>
            </div>

            <div className="info-card">
              <h4>🚀 O que mais oferecemos:</h4>
              <ul>
                <li>
                  <FaWhatsapp /> <strong>Integrações WhatsApp</strong> -
                  Automação de atendimento
                </li>
                <li>
                  <FaRobot /> <strong>Web Scraping</strong> - Coleta inteligente
                  de dados
                </li>
                <li>
                  <FaGamepad /> <strong>Desenvolvimento de Games</strong> - Em
                  breve
                </li>
                <li>
                  <FaServer /> <strong>Soluções IoT</strong> - Conectividade
                  inteligente
                </li>
              </ul>
            </div>
          </div> */}
        </section>

        {/* CTA Section */}
        <section className="portfolio-cta">
          <div className="cta-content">
            <h2>Pronto para Transformar Sua Ideia em Realidade?</h2>
            <p>
              Entre em contato para uma consultoria gratuita e receba uma
              proposta personalizada para o seu projeto.
            </p>

            <div className="cta-buttons">
              <a
                href="https://api.whatsapp.com/send?phone=5555992935160&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                <FaWhatsapp />
                Solicitar Orçamento
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5555992935160&text=Olá! Gostaria de agendar uma demonstração dos seus sistemas"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <FiMessageSquare />
                Agendar Demonstração
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Portfolio;
