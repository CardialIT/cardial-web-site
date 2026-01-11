import React, { useState } from "react";
import NavBar from "../../sections/NavBar";
import Footer from "../../sections/Footer";
import ReactWhatsappButton from "react-whatsapp-button";
import "./styles.css";
import { 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaStar, 
  FaRegStar,
  FaPlay, 
  FaPause,
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaDownload,
  FaIndustry,
  FaHome,
  FaTruck,
  FaHeartbeat,
  FaStore,
  FaLeaf,
  FaUserTie,
  FaBuilding
} from "react-icons/fa";
import { FiMessageSquare, FiThumbsUp } from "react-icons/fi";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Laurence",
      company: "Ruminar Leite",
      role: "Veterinário",
      project: "App Ruminar Leite",
      category: "mobile",
      quote: "O Ruminar Leite revolucionou nossa gestão. Antes tínhamos anotações em cadernos, hoje temos controle em tempo real da produção, saúde do rebanho e custos. Aumentamos 30% na produtividade!",
      rating: 5,
      avatar: "LA",
      color: "#4A90E2",
      link: "https://play.google.com/store/apps/details?id=com.thalis.ruminar_leite&hl=pt_BR",
      linkLabel: "Ver na Play Store",
      icon: <FaLeaf />
    },
    {
      id: 2,
      name: "Adriana Rudá",
      company: "Adriana Rudá Imóveis",
      role: "Corretora de Imóveis",
      project: "Site Institucional",
      category: "web",
      quote: "Meu site não apenas trouxe mais visibilidade, mas profissionalizou meu trabalho. As ligações aumentaram 150% e fechei 3 contratos importantes no primeiro mês após o lançamento.",
      rating: 5,
      avatar: "AR",
      color: "#9B59B6",
      link: "https://www.adriarrudaimoveis.com.br/",
      linkLabel: "Visitar Site",
      icon: <FaHome />
    },
    {
      id: 3,
      name: "Maykel",
      company: "Transportes Maykel",
      role: "Proprietário",
      project: "Sistema Truckage",
      category: "saas",
      quote: "O Truckage transformou nossa operação. Antes perdíamos horas com planilhas, hoje temos tudo automatizado: rastreamento, cálculo de rotas, controle de manutenção. Reduzimos custos em 25%!",
      rating: 5,
      avatar: "MA",
      color: "#E74C3C",
      link: "#",
      linkLabel: "Em desenvolvimento",
      icon: <FaTruck />
    },
    {
      id: 4,
      name: "Marcus",
      company: "Clínica Cleuza Canan",
      role: "Diretor Administrativo",
      project: "App Terapêutico",
      category: "mobile",
      quote: "A solução desenvolvida pela Cardial melhorou drasticamente nosso acompanhamento terapêutico. Agora temos controle preciso das atividades e progresso dos pacientes. A equipe está muito mais organizada.",
      rating: 5,
      avatar: "MC",
      color: "#2ECC71",
      link: "#",
      linkLabel: "App interno",
      icon: <FaHeartbeat />
    },
    {
      id: 5,
      name: "Hiago",
      company: "Sindicato do Comércio",
      role: "Presidente",
      project: "App de Pontuações",
      category: "mobile",
      quote: "Parceria excelente com a Cardial. O app de benefícios para nossos associados aumentou o engajamento em 80%. A gamificação foi um diferencial que nossos lojistas adoraram.",
      rating: 5,
      avatar: "HI",
      color: "#3498DB",
      link: "#",
      linkLabel: "Em breve",
      icon: <FaStore />
    },
    {
      id: 6,
      name: "Emerson",
      company: "PampaTec",
      role: "CEO",
      project: "Automação Industrial",
      category: "automation",
      quote: "A Cardial desenvolveu uma solução de automação que integrou nossos sistemas de produção. O web scraping e as integrações personalizadas otimizaram nossos processos em 40%. Profissionais muito competentes.",
      rating: 5,
      avatar: "EM",
      color: "#F39C12",
      link: "#",
      linkLabel: "Sistema interno",
      icon: <FaIndustry />
    },
    {
      id: 7,
      name: "Carlos",
      company: "AgroConsult",
      role: "Consultor Agrícola",
      project: "Plataforma Agrônomo",
      category: "saas",
      quote: "A plataforma desenvolvida superou todas expectativas. Posso gerenciar múltiplas fazendas, emitir relatórios técnicos e fazer recomendações personalizadas. Meus clientes estão impressionados.",
      rating: 5,
      avatar: "CA",
      color: "#16A085",
      link: "https://plataforma-agronomo.vercel.app/",
      linkLabel: "Ver demonstração",
      icon: <FaLeaf />
    },
    { 
      id: 8,
      name: "Roberta",
      company: "Moda Express",
      role: "Gerente de E-commerce",
      project: "Marketplace PDV",
      category: "saas",
      quote: "O sistema PDV multi-vendedor mudou nosso negócio. Agora conseguimos escalar sem perder o controle. A integração com múltiplos gateways de pagamento foi perfeita. Recomendo a Cardial!",
      rating: 5,
      avatar: "RO",
      color: "#8E44AD",
      link: "https://front-pdv-two.vercel.app/",
      linkLabel: "Testar sistema",
      icon: <FaStore />
    }
  ];

  const categories = [
    { id: "all", label: "Todos", icon: <FaStar /> },
    { id: "mobile", label: "Apps Mobile", icon: <FaDownload /> },
    { id: "web", label: "Sites Web", icon: <FaExternalLinkAlt /> },
    { id: "saas", label: "Sistemas SAAS", icon: <FaBuilding /> },
    { id: "automation", label: "Automação", icon: <FaIndustry /> }
  ];

  const stats = [
    { value: "98%", label: "Satisfação dos Clientes", color: "#10b981" },
    { value: "150%", label: "Crescimento em Eficiência", color: "#2563eb" },
    { value: "40%", label: "Redução de Custos", color: "#8b5cf6" },
    { value: "80%", label: "Aumento em Engajamento", color: "#f59e0b" }
  ];

  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="star-icon">
        {index < rating ? <FaStar /> : <FaRegStar />}
      </span>
    ));
  };

  return (
    <div className="testimonials-container">
      <ReactWhatsappButton 
        countryCode="55" 
        phoneNumber="41996745640" 
        className="whatsapp-button"
      />
      <NavBar />
      
      <main className="testimonials-main">
        {/* Hero Section */}
        <section className="testimonials-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              A <span className="gradient-text">Voz</span> dos Nossos 
              <span className="gradient-text"> Clientes</span>
            </h1>
            <p className="hero-subtitle">
              Histórias reais de transformação digital. Conheça os resultados que 
              nossos clientes alcançaram com as soluções da Cardial.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="categories-section">
          <h2 className="section-title">Depoimentos por Categoria</h2>
          <div className="categories-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(category.id);
                  setActiveIndex(0);
                }}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-label">{category.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="featured-section">
          <div className="featured-controls">
            <button className="control-btn prev-btn" onClick={prevTestimonial}>
              <FaChevronLeft />
            </button>
            
            <button 
              className={`control-btn play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            
            <button className="control-btn next-btn" onClick={nextTestimonial}>
              <FaChevronRight />
            </button>
          </div>

          <div className="featured-testimonial">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
                style={{ '--slide-color': testimonial.color }}
              >
                <div className="quote-marks">
                  <FaQuoteLeft className="quote-left" />
                  <FaQuoteRight className="quote-right" />
                </div>

                <div className="testimonial-body">
                  <p className="quote-text">{testimonial.quote}</p>
                  
                  <div className="rating-section">
                    <div className="stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="rating-text">Excelente</span>
                  </div>
                </div>

                <div className="client-info">
                  <div className="client-avatar" style={{ backgroundColor: `${testimonial.color}20` }}>
                    <span style={{ color: testimonial.color }}>{testimonial.avatar}</span>
                    <div className="avatar-glow" style={{ background: testimonial.color }}></div>
                  </div>
                  
                  <div className="client-details">
                    <h3 className="client-name">{testimonial.name}</h3>
                    <p className="client-role">{testimonial.role}</p>
                    <p className="client-company">{testimonial.company}</p>
                    <div className="project-badge" style={{ color: testimonial.color }}>
                      {testimonial.icon}
                      <span>{testimonial.project}</span>
                    </div>
                    
                    {testimonial.link && testimonial.link !== "#" && (
                      <a 
                        href={testimonial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                        {testimonial.linkLabel}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${((activeIndex + 1) / filteredTestimonials.length) * 100}%`,
                  backgroundColor: filteredTestimonials[activeIndex]?.color || '#2563eb'
                }}
              ></div>
            </div>
            <div className="progress-text">
              {activeIndex + 1} / {filteredTestimonials.length}
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="all-testimonials">
          <h2 className="section-title">Todos os Depoimentos</h2>
          
          <div className="testimonials-grid">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="card-header">
                  <div className="client-mini">
                    <div 
                      className="mini-avatar" 
                      style={{ backgroundColor: `${testimonial.color}20`, color: testimonial.color }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="mini-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="project-icon" style={{ color: testimonial.color }}>
                    {testimonial.icon}
                  </div>
                </div>
                
                <div className="card-quote">
                  <FaQuoteLeft className="mini-quote" style={{ color: testimonial.color }} />
                  <p>{testimonial.quote.substring(0, 150)}...</p>
                </div>
                
                <div className="card-footer">
                  <div className="mini-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {testimonial.link && testimonial.link !== "#" && (
                    <a 
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-link"
                      style={{ color: testimonial.color }}
                    >
                      Ver Projeto
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="testimonials-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Seja o Próximo a Contar Sua História de Sucesso</h2>
              <p>
                Transforme seu negócio com soluções digitais que realmente fazem a diferença. 
                Junte-se aos nossos clientes satisfeitos.
              </p>
            </div>
            
            <div className="cta-buttons">
              <a 
                href="https://api.whatsapp.com/send?phone=5541996745640&text=Olá! Gostaria de conversar sobre um projeto como os que vi nos depoimentos"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                <FaWhatsapp />
                Quero Meu Projeto
              </a>
              
              <a 
                href="https://api.whatsapp.com/send?phone=5541996745640&text=Olá! Gostaria de falar com algum dos clientes para referência"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <FiMessageSquare />
                Falar com Referências
              </a>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="trust-section">
          <h3 className="trust-title">Por que nossos clientes confiam na Cardial</h3>
          
          <div className="trust-grid">
            <div className="trust-item">
              <FiThumbsUp className="trust-icon" />
              <h4>Compromisso com Resultados</h4>
              <p>Entregamos não apenas código, mas soluções que geram valor real para seu negócio.</p>
            </div>
            
            <div className="trust-item">
              <FaUserTie className="trust-icon" />
              <h4>Suporte Dedicado</h4>
              <p>Equipe sempre disponível para ajustes, melhorias e suporte técnico especializado.</p>
            </div>
            
            <div className="trust-item">
              <FaBuilding className="trust-icon" />
              <h4>Experiência Comprovada</h4>
              <p>Mais de 15 projetos entregues com sucesso em diversos segmentos do mercado.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Testimonials;