import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import {
  FaUsers,
  FaDollarSign,
  FaLaptop,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaTrophy,
  FaInfinity,
} from "react-icons/fa";
import {
  FiTarget,
  FiClock,
  FiGlobe,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";
import { PiBirdFill } from "react-icons/pi";
import { IoStatsChart, IoCodeSlash } from "react-icons/io5";
import Iago from "../../assets/iago.png";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animar cards com delay
      cardRefs.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 100);
        }
      });

      // Animar stats com delay
      statRefs.current.forEach((stat, index) => {
        if (stat) {
          setTimeout(() => {
            stat.style.opacity = "1";
            stat.style.transform = "scale(1)";
          }, index * 150);
        }
      });
    }
  }, [isVisible]);

  const reasons = [
    {
      icon: <FaUsers />,
      title: "Atendimento que Te Entende",
      description:
        "Suporte humano, paciente e focado na sua experiência - ideal para quem está entrando no digital agora.",
      features: [
        "Explicamos passo a passo",
        "Sem linguagem técnica complicada",
        "Paciência para suas dúvidas",
      ],
      stat: "100%",
      statLabel: "Focado na sua experiência",
      color: "#b93173",
    },
    {
      icon: <FaDollarSign />,
      title: "Preço que Cabe no Bolso",
      description:
        "Tecnologia de alto nível sem assustar no orçamento. Cabe no seu bolso e entrega resultado.",
      features: [
        "Preço abaixo do mercado",
        "Custo-benefício transparente",
        "Investimento justo",
      ],
      stat: "40%",
      statLabel: "Mais econômico que concorrência",
      color: "#b93173",
    },
    {
      icon: <FaLaptop />,
      title: "Tecnologia Sem Complicação",
      description:
        "Falamos sua língua, guiamos você a cada passo, mesmo que esteja começando agora no digital.",
      features: [
        "Tecnologia acessível",
        "Guiamos cada etapa",
        "Adaptamos ao seu nível",
      ],
      stat: "0%",
      statLabel: "Complicação técnica",
      color: "#b93173",
    },
    {
      icon: <FaHandshake />,
      title: "Transparência Total",
      description:
        "Você sabe exatamente o que está sendo feito, quanto custa e quanto será entregue - sem surpresas.",
      features: [
        "Orçamento detalhado",
        "Cronograma claro",
        "Entregas previsíveis",
      ],
      stat: "100%",
      statLabel: "Sem surpresas no orçamento",
      color: "#b93173",
    },
    {
      icon: <FaRocket />,
      title: "Resultados Rápidos",
      description:
        "Entregas ágeis e mensuráveis que mostram o retorno do seu investimento desde o início.",
      features: ["MVP em semanas", "Métricas claras", "Resultado visível"],
      stat: "2x",
      statLabel: "Mais rápido que o convencional",
      color: "#b93173",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confiança Garantida",
      description:
        "Parceria baseada em confiança mútua, com qualidade assegurada e suporte constante.",
      features: [
        "Garantia no trabalho",
        "Suporte contínuo",
        "Parceria duradoura",
      ],
      stat: "95%",
      statLabel: "Clientes que indicam",
      color: "#b93173",
    },
  ];

  const stats = [
    {
      icon: <FaTrophy />,
      value: 10,
      suffix: "+",
      label: "Projetos Entregues com Sucesso",
      color: "#cf4675",
    },
    {
      icon: <FaStar />,
      value: 98,
      suffix: "%",
      label: "Satisfação do Cliente",
      color: "#cf4675",
    },
    {
      icon: <FiClock />,
      value: 12,
      suffix: "/5",
      label: "Suporte Humano Disponível",
      color: "#cf4675",
    },
    {
      icon: <PiBirdFill />,
      value: 4,
      suffix: "",
      label: "Estados do Brasil usam um software da Cardial",
      color: "#cf4675",
    },
  ];

  const principles = [
    { icon: <FiTarget />, text: "Foco na Sua Experiência" },
    { icon: <IoStatsChart />, text: "Preços Transparentes" },
    { icon: <IoCodeSlash />, text: "Tecnologia Simples" },
    { icon: <FiGlobe />, text: "Para Iniciantes" },
    { icon: <FiTrendingUp />, text: "Crescimento Sem Complicação" },
  ];

  // Função para animar contagem
  const AnimatedCounter = ({ end, suffix, decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepTime = duration / steps;

    useEffect(() => {
      if (isVisible) {
        let current = 0;
        const timer = setInterval(() => {
          current += stepValue;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(current);
          }
        }, stepTime);

        return () => clearInterval(timer);
      }
    }, [isVisible, end, stepValue, stepTime]);

    return (
      <span className="stat-value">
        {count.toFixed(decimals)}
        {suffix}
      </span>
    );
  };

  return (
    <section className="why-choose-us" id="porque-escolher" ref={sectionRef}>
      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <div
          className="section-header"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="section-subtitle">POR QUE ESCOLHER A GENTE</span>
          <h2 className="section-title">
            Para Quem Busca
            <span className="gradient-text"> Tecnologia sem Mistério</span> e
            <span className="gradient-text"> Resultado sem Surpresa</span>
          </h2>
          <p className="section-description">
            Combinamos suporte humanizado com tecnologia acessível para sua
            transformação digital, principalmente se você for um iniciante -
            sempre com transparência total e preço justo.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statRefs.current[index] = el)}
              className="stat-item"
              style={{
                borderLeftColor: stat.color,
                opacity: 0,
                transform: "scale(0.8)",
                transition: `opacity 0.5s ease ${
                  index * 0.1
                }s, transform 0.5s ease ${index * 0.1}s`,
              }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-value">
                  {isVisible ? (
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.value === 99.9 ? 1 : 0}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="reason-card"
              style={{
                "--card-color": reason.color,
                "--card-bg": `${reason.color}15`,
                opacity: 0,
                transform: "translateY(50px)",
                transition: `opacity 0.6s ease ${
                  index * 0.1
                }s, transform 0.6s ease ${index * 0.1}s`,
              }}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="icon-wrapper" style={{ color: reason.color }}>
                  <div
                    className="icon-bg"
                    style={{ backgroundColor: `${reason.color}20` }}
                  >
                    {reason.icon}
                  </div>
                  <div
                    className="icon-glow"
                    style={{ background: reason.color }}
                  ></div>
                </div>
                <div className="card-stat">
                  <span className="stat-number">{reason.stat}</span>
                  <span className="stat-text">{reason.statLabel}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>

                <ul className="features-list">
                  {reason.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle
                        className="check-icon"
                        style={{ color: reason.color }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      backgroundColor: reason.color,
                      width: isVisible ? "100%" : "0%",
                      transition: "width 1s ease",
                    }}
                  ></div>
                </div>
              </div>

              {/* Hover Effect */}
              <div
                className="card-hover-effect"
                style={{ background: reason.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Principles Section */}
        <div
          className="principles-section"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          <div className="principles-header">
            <h3>Nossos Compromissos com Você</h3>
            <p>Valores que guiam cada projeto e cada conversa</p>
          </div>

          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="principle-item"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${
                    index * 0.1
                  }s, transform 0.5s ease ${index * 0.1}s`,
                }}
              >
                <div className="principle-icon">{principle.icon}</div>
                <span>{principle.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="cta-section"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s",
          }}
        >
          <div className="cta-content">
            <div className="cta-text-image-container">
              <div className="cta-text-content">
                <h3>Pronto para uma Experiência Digital Sem Complicação?</h3>
                <p className="cta-subtitle">
                  Transformamos sua ideia em realidade digital com simplicidade
                  e transparência
                </p>

                <div className="cta-buttons">
                  <a
                    href="https://api.whatsapp.com/send?phone=5555999293516&text=Ol%C3%A1!%20Vi%20que%20voc%C3%AAs%20entendem%20quem%20est%C3%A1%20come%C3%A7ando%20no%20digital.%20Podemos%20conversar?"
                    className="cta-button primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaHandshake className="button-icon" />
                    Conversar sem Compromisso
                  </a>
                  <a href="/portfolio" className="cta-button secondary">
                    <FiArrowRight className="button-icon" />
                    Ver Projetos Similares
                  </a>
                </div>
              </div>

              <div className="cta-image-container">
                <img
                  src={Iago}
                  alt="Cardial Tech - Equipe especializada em tecnologia acessível"
                  className="cta-profile-image"
                />
              
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div
          className="testimonial-preview"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 1s, transform 0.6s ease 1s",
          }}
        >
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
          Como programador que também é empreendedor, entendo as duas pontas: 
    a complexidade técnica e a necessidade de resultados claros. Na Cardial, criamos 
    essa ponte - traduzimos tecnologia para quem está começando e entregamos 
    soluções que realmente funcionam, com a transparência que eu mesmo buscaria.
          </p>
          <div className="client-info">
            <span className="client-name">Thalis Antunes</span>
            <span className="client-role">
              Fundador da Cardial I.T
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
