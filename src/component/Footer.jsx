import "../styles/Footer.css";
import logo from "../img/logo_png_Nohrd.png";
import translations from "../translations";

function Footer({ language = "es" }) {

  const t = translations[language];
  const f = t.footer;
  const nav = t.nav;

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
              {f.description}
            </p>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">{f.navigation}</h4>

            <a href="#home" className="footer__link">{nav.home}</a>
            <a href="#empresa" className="footer__link">{nav.company}</a>
            <a href="#productos" className="footer__link">{nav.products}</a>
            <a href="#red-global" className="footer__link">{nav.network}</a>
            <a href="#contacto" className="footer__link">{nav.contact}</a>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">{f.contact}</h4>

            <p className="footer__text">sales@cereales-nohrd.com</p>
            <p className="footer__text">(+54-11) 4371-4767</p>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">{f.office}</h4>

            <p className="footer__text">Tucumán 1484 2ºB</p>
            <p className="footer__text">Capital Federal</p>
            <p className="footer__text">(C1050AAD) Buenos Aires</p>
            <p className="footer__text">Argentina</p>
          </div>

        </div>

        <div className="footer__bottom">

          <p className="footer__copyright">
            © {new Date().getFullYear()} {f.copyright}
          </p>

          <p className="footer__made">
            {f.tagline}
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;