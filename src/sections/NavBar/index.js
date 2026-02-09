import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import Logo from "../../assets/passaro-pequeno-fundo-branco.png";
import "./styles.css";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Sobre Nós", href: "/about-us" },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-section">
          <a href="/" className="logo-link">
            <img src={Logo} className="logo-img" alt="Cardial I.T." />
           
          </a>
        </div>

        {/* Navigation - Always visible */}
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="nav-item"
                onMouseEnter={() => !isMobile && item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => !isMobile && setActiveDropdown(null)}
                onClick={() => isMobile && item.dropdown && setActiveDropdown(
                  activeDropdown === index ? null : index
                )}
              >
                <a href={item.href} className="nav-link">
                  {item.label}
                  {item.dropdown && <FiChevronDown className={`dropdown-icon ${activeDropdown === index ? 'rotated' : ''}`} />}
                </a>
                
                {item.dropdown && (
                  <div className={`dropdown-menu ${activeDropdown === index ? 'active' : ''}`}>
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

        {/* CTA Button - Only on desktop */}
        {!isMobile && (
          <div className="cta-section">
            <Tilt
              className="tilt-button"
              options={{ max: 25, scale: 1.05 }}
              style={{ height: 50, width: 250 }}
            >
              <a
                className="cta-button"
                href="https://api.whatsapp.com/send?phone=5555992935160&text=Ol%C3%A1!%20vim%20do%20Site%20da%20Cardial%20;)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="whatsapp-icon" />
                Fale Conosco
              </a>
            </Tilt>
          </div>
        )}

        {/* WhatsApp button for mobile - Simple and small */}
        {isMobile && (
          <a
            className="mobile-whatsapp-button"
            href="https://api.whatsapp.com/send?phone=5555992935160&text=Ol%C3%A1!%20vim%20do%20Site%20da%20Cardial%20;)"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        )}
      </div>
    </header>
  );
}