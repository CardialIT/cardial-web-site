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
    quote: "Antes tínhamos anotações em planilhas, hoje temos controle em tempo real da produção e custos.",
      author: "Laurence Brum",
     role: "Veterinário",
      rating: 5,
      avatar: "LB",
      company: "Ruminar",
      color: "#b93173",
      features: ["App Mobile"]
    },
    {
      quote: "A solução desenvolvida pela Cardial melhorou drasticamente nosso acompanhamento terapêutico.",
      author: "Marcus Vilhena",
      role: "Marketing Digital",
      rating: 5,
      avatar: "MV",
      company: "Clínica Cleuza Canan",
      color: "#b93173",
      features: ["App Mobile"]
    },
   
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
    { icon: <FiTrendingUp />, value: "150%", label: "Aumento em Eficiência", color: "#b93173" },
    { icon: <IoMdBusiness />, value: "10+", label: "Projetos Entregues", color: "#b93173" },
    { icon: <FiUser />, value: "98%", label: "Satisfação", color: "#b93173" }
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
                href="https://api.whatsapp.com/send?phone=5555999293516&text=Ol%C3%A1!%20gostaria%20de%20ver%20mais%20depoimentos%20e%20saber%20mais"
                className="cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
              </a>
              <a href="/testimonials" className="cta-button secondary">
                Ver Cases Completos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}