import { useState } from "react";
import "../styles/Header.css";
import logo from "../img/logo_png_Nohrd.png";
import flagEs from "../img/banderaES.jpg";
import flagUs from "../img/banderaEEUU.png";

const navItems = {
  es: [
    { label: "Empresa", href: "#empresa" },
    { label: "Productos", href: "#productos" },
    { label: "Red Global", href: "#red-global" },
    { label: "Contacto", href: "#contacto" }
  ],
  en: [
    { label: "Company", href: "#empresa" },
    { label: "Products", href: "#productos" },
    { label: "Global Network", href: "#red-global" },
    { label: "Contact", href: "#contacto" }
  ]
};

function Header({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = navItems[language] || navItems.es;

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="header__logo">
          <img src={logo} alt="Nohrd Logo" className="header__logo-image" />
        </a>

        <nav className="header__nav">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__lang">
          <button
            type="button"
            className={`header__flag-button ${language === "es" ? "active" : ""}`}
            onClick={() => handleLanguageChange("es")}
            aria-label="Cambiar a español"
            title="Español"
          >
            <img src={flagEs} alt="Español" className="header__flag" />
          </button>

          <button
            type="button"
            className={`header__flag-button ${language === "en" ? "active" : ""}`}
            onClick={() => handleLanguageChange("en")}
            aria-label="Switch to English"
            title="English"
          >
            <img src={flagUs} alt="English" className="header__flag" />
          </button>
        </div>

        <button
          className="header__menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label="Abrir menú"
        >
          <span className="header__menu-line"></span>
          <span className="header__menu-line"></span>
          <span className="header__menu-line"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu__link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="mobile-menu__lang">
              <button
                type="button"
                className={`header__flag-button ${language === "es" ? "active" : ""}`}
                onClick={() => handleLanguageChange("es")}
                aria-label="Cambiar a español"
              >
                <img src={flagEs} alt="Español" className="header__flag" />
              </button>

              <button
                type="button"
                className={`header__flag-button ${language === "en" ? "active" : ""}`}
                onClick={() => handleLanguageChange("en")}
                aria-label="Switch to English"
              >
                <img src={flagUs} alt="English" className="header__flag" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;