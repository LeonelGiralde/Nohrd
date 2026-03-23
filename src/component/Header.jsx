import { useState } from "react";
import "../styles/Header.css";
import logo from "../img/logo_png_Nohrd.png";

const navItems = [
  { label: "Empresa", href: "#empresa" },
  { label: "Productos", href: "#productos" },
  { label: "Red Global", href: "#red-global" },
  { label: "Contacto", href: "#contacto" }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        
        <a href="#home" className="header__logo">
          <img src={logo} alt="Nohrd Logo" className="header__logo-image" />
        </a>

        <nav className="header__nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="header__menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__menu-line"></span>
          <span className="header__menu-line"></span>
          <span className="header__menu-line"></span>
        </button>

      </div>
    </header>
  );
}

export default Header;