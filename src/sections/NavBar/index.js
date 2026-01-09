import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import Logo from "../../assets/passaro-pequeno-fundo-branco.png";
import "./styles.css";
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#home" },
    { 
      label: "Serviços", 
      href: "#servicos",
      dropdown: [
        { label: "Desenvolvimento Web", href: "#web" },
        { label: "Apps Mobile", href: "#mobile" },
        { label: "Sistemas SAAS", href: "#saas" },
        { label: "Consultoria Tech", href: "#consultoria" }
      ]
    },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Depoimentos", href: "#depoimentos" }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-section">
          <a href="/" className="logo-link">
            <img src={Logo} className="logo-img" alt="Cardial I.T." />
            <div className="logo-text">
              <span className="logo-name">Cardial</span>
              <span className="logo-subtitle">I.T. Solutions</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="nav-item"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={item.href} className="nav-link">
                  {item.label}
                  {item.dropdown && <FiChevronDown className="dropdown-icon" />}
                </a>
                
                {item.dropdown && activeDropdown === index && (
                  <div className="dropdown-menu">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <a 
                        key={idx} 
                        href={dropdownItem.href}
                        className="dropdown-item"
                      >
                        {dropdownItem.label}
                        <FiArrowRight className="arrow-icon" />
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <Tilt
          className="tilt-button"
          options={{ max: 25, scale: 1.05 }}
          style={{ height: 50, width: 250 }}
        >
          <a
            className="cta-button"
            href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20vim%20do%20Site%20da%20Cardial%20;)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Fale Conosco
          </a>
        </Tilt>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-header">
            <div className="mobile-logo">
              <img src={Logo} alt="Cardial" />
              <span>Cardial</span>
            </div>
            <button 
              className="mobile-close" 
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <FiX />
            </button>
          </div>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  <a 
                    href={item.href} 
                    className="mobile-nav-link"
                    onClick={toggleMenu}
                  >
                    {item.label}
                    {item.dropdown && <FiChevronDown />}
                  </a>
                  
                  {item.dropdown && (
                    <div className="mobile-dropdown">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <a 
                          key={idx} 
                          href={dropdownItem.href}
                          className="mobile-dropdown-item"
                          onClick={toggleMenu}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-cta">
            <a
              className="mobile-whatsapp"
              href="https://api.whatsapp.com/send?phone=5541996745640&text=Ol%C3%A1!%20vim%20do%20Site%20da%20Cardial%20;)"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              <FaWhatsapp />
              Conversar no WhatsApp
            </a>
            
            <div className="mobile-contact">
              <p>contato@cardial.com</p>
              <p>(41) 99674-5640</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}