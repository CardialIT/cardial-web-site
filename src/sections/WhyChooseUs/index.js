import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { 
  FaUsers, FaDollarSign, FaLaptop, FaHandshake, 
  FaRocket, FaShieldAlt, FaCheckCircle, FaStar, 
  FaTrophy, FaInfinity
} from "react-icons/fa";
import { FiTarget, FiClock, FiGlobe, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { IoStatsChart, IoCodeSlash } from "react-icons/io5";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });

      // Animar stats com delay
      statRefs.current.forEach((stat, index) => {
        if (stat) {
          setTimeout(() => {
            stat.style.opacity = '1';
            stat.style.transform = 'scale(1)';
          }, index * 150);
        }
      });
    }
  }, [isVisible]);

  const reasons = [
    {
      icon: <FaUsers />,
      title: "Atendimento Humanizado",
      description: "Suporte personalizado com comunicação clara e empatia, sem chatbots ou respostas automatizadas.",
      features: ["Consultor dedicado", "Suporte 24/7 humano", "Feedback constante"],
      stat: "98%",
      statLabel: "Satisfação no atendimento",
      color: "#2563eb"
    },
    {
      icon: <FaDollarSign />,
      title: "Valor Justo & Transparente",
      description: "Tecnologia de ponta com preços abaixo do mercado e total transparência nos investimentos.",
      features: ["Sem custos ocultos", "Flexibilidade financeira", "ROI garantido"],
      stat: "40%",
      statLabel: "Mais econômico",
      color: "#10b981"
    },
    {
      icon: <FaLaptop />,
      title: "Tecnologia de Ponta",
      description: "Stack tecnológico atualizado com soluções completas, escaláveis e de alta performance.",
      features: ["Tecnologias modernas", "Arquitetura escalável", "Performance otimizada"],
      stat: "15+",
      statLabel: "Tecnologias dominadas",
      color: "#8b5cf6"
    },
    {
      icon: <FaHandshake />,
      title: "Parceria Real",
      description: "Não somos apenas prestadores, somos parceiros no crescimento do seu negócio.",
      features: ["Alinhamento estratégico", "Metas compartilhadas", "Crescimento conjunto"],
      stat: "95%",
      statLabel: "Clientes recorrentes",
      color: "#f59e0b"
    },
    {
      icon: <FaRocket />,
      title: "Entrega Ágil",
      description: "Metodologias ágeis que garantem entregas rápidas sem comprometer a qualidade.",
      features: ["Metodologia Scrum", "Sprints quinzenais", "MVP em 30 dias"],
      stat: "2x",
      statLabel: "Mais rápido",
      color: "#ec4899"
    },
    {
      icon: <FaShieldAlt />,
      title: "Segurança Garantida",
      description: "Protocolos de segurança robustos para proteger seus dados e aplicações.",
      features: ["SSL/HTTPS", "Backups automáticos", "Conformidade LGPD"],
      stat: "100%",
      statLabel: "Segurança garantida",
      color: "#3b82f6"
    }
  ];

  const stats = [
    { icon: <FaTrophy />, value: 150, suffix: "+", label: "Projetos Entregues", color: "#f59e0b" },
    { icon: <FaStar />, value: 98, suffix: "%", label: "Satisfação do Cliente", color: "#8b5cf6" },
    { icon: <FiClock />, value: 24, suffix: "/7", label: "Suporte Disponível", color: "#10b981" },
    { icon: <FaInfinity />, value: 99.9, suffix: "%", label: "Uptime Garantido", color: "#ec4899" }
  ];

  const principles = [
    { icon: <FiTarget />, text: "Foco em Resultados" },
    { icon: <IoStatsChart />, text: "Métricas Mensuráveis" },
    { icon: <IoCodeSlash />, text: "Código de Qualidade" },
    { icon: <FiGlobe />, text: "Visão Global" },
    { icon: <FiTrendingUp />, text: "Crescimento Sustentável" }
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
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }}
        >
          <span className="section-subtitle">POR QUE NÓS</span>
          <h2 className="section-title">
            Não Somos Apenas uma Empresa, Somos Seu 
            <span className="gradient-text"> Parceiro Tecnológico</span>
          </h2>
          <p className="section-description">
            Combinamos expertise técnica com paixão por resultados para entregar 
            não apenas código, mas soluções que transformam negócios.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div 
              key={index}
              ref={el => statRefs.current[index] = el}
              className="stat-item"
              style={{ 
                borderLeftColor: stat.color,
                opacity: 0,
                transform: 'scale(0.8)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
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
              ref={el => cardRefs.current[index] = el}
              className="reason-card"
              style={{ 
                '--card-color': reason.color,
                '--card-bg': `${reason.color}15`,
                opacity: 0,
                transform: 'translateY(50px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
              }}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="icon-wrapper" style={{ color: reason.color }}>
                  <div className="icon-bg" style={{ backgroundColor: `${reason.color}20` }}>
                    {reason.icon}
                  </div>
                  <div className="icon-glow" style={{ background: reason.color }}></div>
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
                      <FaCheckCircle className="check-icon" style={{ color: reason.color }} />
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
                      width: isVisible ? '100%' : '0%',
                      transition: 'width 1s ease'
                    }}
                  ></div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="card-hover-effect" style={{ background: reason.color }}></div>
            </div>
          ))}
        </div>

        {/* Principles Section */}
        <div 
          className="principles-section"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s'
          }}
        >
          <div className="principles-header">
            <h3>Nossos Princípios</h3>
            <p>Valores que guiam cada linha de código e cada decisão</p>
          </div>
          
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div 
                key={index} 
                className="principle-item"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
                }}
              >
                <div className="principle-icon">
                  {principle.icon}
                </div>
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
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s'
          }}
        >
          <div className="cta-content">
            <h3>Pronto para uma Parceria de Verdade?</h3>
            <p>Vamos transformar suas ideias em soluções digitais de sucesso.</p>
            
            <div className="cta-buttons">
              <a 
                href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20gostaria%20de%20saber%20porque%20escolher%20voc%C3%AAs"
                className="cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHandshake className="button-icon" />
                Agendar Conversa
              </a>
              <a href="#portfolio" className="cta-button secondary">
                <FiArrowRight className="button-icon" />
                Ver Casos de Sucesso
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div 
          className="testimonial-preview"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease 1s, transform 0.6s ease 1s'
          }}
        >
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            Trabalhar com essa equipe foi transformador. Não apenas entregaram 
            o projeto perfeitamente, mas se tornaram verdadeiros parceiros do nosso crescimento.
          </p>
          <div className="client-info">
            <span className="client-name">Carlos Silva</span>
            <span className="client-role">CEO, TechSolutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}