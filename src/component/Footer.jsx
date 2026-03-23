import "../styles/Footer.css";
import logo from "../img/logo_Nohrd.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src={logo}
              alt="Cereales Nohrd"
              className="footer__logo"
            />

            <p className="footer__description">
              Cereales Nohrd Argentina S.A. es una empresa dedicada a la
              comercialización internacional de productos alimenticios,
              con foco en calidad, abastecimiento sostenido y excelencia
              operativa.
            </p>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Navegación</h4>
            <a href="#home" className="footer__link">Inicio</a>
            <a href="#empresa" className="footer__link">Empresa</a>
            <a href="#productos" className="footer__link">Productos</a>
            <a href="#red-global" className="footer__link">Red Global</a>
            <a href="#contacto" className="footer__link">Contacto</a>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Contacto</h4>
            <p className="footer__text">sales@cereales-nohrd.com</p>
            <p className="footer__text">(+54-11) 4371-4767</p>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Oficina</h4>
            <p className="footer__text">Tucumán 1484 2ºB</p>
            <p className="footer__text">Capital Federal</p>
            <p className="footer__text">(C1050AAD) Buenos Aires</p>
            <p className="footer__text">Argentina</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Cereales Nohrd Argentina S.A. All rights reserved.
          </p>

          <p className="footer__made">
            International food trading with global reach.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;