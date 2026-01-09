import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { 
  FaQuoteLeft, FaQuoteRight, FaStar, FaRegStar,
  FaChevronLeft, FaChevronRight, FaPlay, FaPause
} from "react-icons/fa";
import { FiCheckCircle, FiTrendingUp, FiUser } from "react-icons/fi";
import { IoMdBusiness } from "react-icons/io";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      quote: "A Cardial não apenas desenvolveu nosso sistema, mas revolucionou toda nossa operação. Aumentamos 150% em eficiência!",
      author: "Carlos Mendes",
      role: "CEO, TechGrowth Solutions",
      rating: 5,
      avatar: "CM",
      company: "Fintech",
      color: "#2563eb",
      features: ["SaaS Personalizado", "Integração Completa", "Suporte 24/7"]
    },
    {
      quote: "O aplicativo desenvolvido superou todas as expectativas. Usabilidade impecável e performance excepcional. ROI incrível!",
      author: "Ana Silva",
      role: "Diretora de Inovação, RetailPro",
      rating: 5,
      avatar: "AS",
      company: "Varejo",
      color: "#10b981",
      features: ["App Mobile Nativo", "UX/UI Premium", "Escalabilidade"]
    },
    {
      quote: "A automação implementada reduziu 80% do trabalho manual. Equipe extremamente profissional e resultados rápidos.",
      author: "Roberto Santos",
      role: "CTO, LogisticsTech",
      rating: 5,
      avatar: "RS",
      company: "Logística",
      color: "#8b5cf6",
      features: ["Automação RPA", "API Integrada", "Dashboard em Tempo Real"]
    },
    {
      quote: "Transformação digital completa com consultoria especializada. Parceiros estratégicos no nosso crescimento.",
      author: "Mariana Costa",
      role: "VP de Operações, HealthPlus",
      rating: 5,
      avatar: "MC",
      company: "Saúde",
      color: "#f59e0b",
      features: ["Sistema Customizado", "Migração Cloud", "Segurança LGPD"]
    },
    {
      quote: "Site responsivo que aumentou conversões em 300%. SEO otimizado que nos posicionou no topo do Google.",
      author: "Pedro Almeida",
      role: "Fundador, EduTech Brasil",
      rating: 5,
      avatar: "PA",
      company: "Educação",
      color: "#ec4899",
      features: ["Site Performático", "SEO Avançado", "Analytics Integrado"]
    }
  ];

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
    if (isPlaying && isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isVisible, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const stats = [
    { icon: <FiTrendingUp />, value: "150%", label: "Aumento em Eficiência", color: "#10b981" },
    { icon: <FiCheckCircle />, value: "300%", label: "Mais Conversões", color: "#2563eb" },
    { icon: <IoMdBusiness />, value: "50+", label: "Projetos Entregues", color: "#8b5cf6" },
    { icon: <FiUser />, value: "98%", label: "Satisfação", color: "#f59e0b" }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="star-icon">
        {index < rating ? <FaStar /> : <FaRegStar />}
      </span>
    ));
  };

  return (
    <section className="testimonials-section" id="depoimentos" ref={sectionRef}>
      {/* Background Elements */}
      <div className="testimonials-bg">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      <div className="testimonials-container">
        {/* Header */}
        <div 
          className="section-header"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }}
        >
          <span className="section-badge">DEPOIMENTOS</span>
          <h2 className="section-title">
            Histórias de <span className="gradient-text">Sucesso</span> que 
            <span className="gradient-text"> Inspiram</span>
          </h2>
          <p className="section-description">
            Veja o que nossos clientes têm a dizer sobre as transformações digitais 
            que realizamos juntos.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="testimonials-stats">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-item"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
                borderLeftColor: stat.color
              }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="testimonial-main">
          <div className="testimonial-controls">
            <button 
              className="control-btn prev-btn" 
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              className={`control-btn play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={toggleAutoplay}
              aria-label={isPlaying ? "Pausar autoplay" : "Iniciar autoplay"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            
            <button 
              className="control-btn next-btn" 
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Testimonial Content */}
          <div className="testimonial-content">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
                style={{ '--slide-color': testimonial.color }}
              >
                <div className="quote-marks">
                  <FaQuoteLeft className="quote-left" />
                  <FaQuoteRight className="quote-right" />
                </div>

                <div className="testimonial-body">
                  <p className="quote-text">{testimonial.quote}</p>
                  
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                    <span className="rating-text">Excelente</span>
                  </div>
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar" style={{ backgroundColor: `${testimonial.color}20` }}>
                    <span style={{ color: testimonial.color }}>{testimonial.avatar}</span>
                    <div className="avatar-glow" style={{ background: testimonial.color }}></div>
                  </div>
                  
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-role">{testimonial.role}</p>
                    <div className="company-badge" style={{ color: testimonial.color }}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="testimonial-features">
                  {testimonial.features.map((feature, idx) => (
                    <div key={idx} className="feature-tag" style={{ borderColor: testimonial.color }}>
                      <span style={{ color: testimonial.color }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="testimonial-progress">
            <div 
              className="progress-bar"
              style={{ 
                width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                backgroundColor: testimonials[activeIndex].color
              }}
            ></div>
          </div>

          {/* Dots Navigation */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                style={{ 
                  backgroundColor: index === activeIndex ? testimonials[activeIndex].color : '#e5e7eb'
                }}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="testimonials-cta"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s'
          }}
        >
          <div className="cta-content">
            <h3>Seja a Próxima História de Sucesso</h3>
            <p>Vamos transformar sua ideia em uma solução digital que impressiona e converte.</p>
            
            <div className="cta-buttons">
              <a 
                href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20gostaria%20de%20ver%20mais%20depoimentos%20e%20saber%20mais"
                className="cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
              </a>
              <a href="#portfolio" className="cta-button secondary">
                Ver Cases Completos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}