import "../styles/OurCompany.css";
import ReactCountryFlag from "react-country-flag";

const markets = [
  { name: "Canadá", code: "CA" },
  { name: "Colombia", code: "CO" },
  { name: "España", code: "ES" },
  { name: "Holanda", code: "NL" },
  { name: "India", code: "IN" },
  { name: "Italia", code: "IT" },
  { name: "Líbano", code: "LB" },
  { name: "Nepal", code: "NP" },
  { name: "Polonia", code: "PL" },
  { name: "Rusia", code: "RU" },
  { name: "Turquía", code: "TR" },
  { name: "U.S.A.", code: "US" }
];

function OurCompany() {
  return (
    <section id="empresa" className="ourcompany">
      <div className="ourcompany__container">
        <div className="ourcompany__header">
          <p className="ourcompany__eyebrow">ABOUT US</p>
          <h2 className="ourcompany__title">Cereales Nohrd</h2>
          <p className="ourcompany__lead">
            Cereales Nohrd Argentina S.A. es una empresa dedicada a la
            comercialización de productos alimenticios desde Sudamérica hacia
            el resto del mundo, con foco en calidad, continuidad de suministro
            y excelencia operativa.
          </p>
        </div>

        <div className="ourcompany__grid">
          <div className="ourcompany__content">
            <div className="ourcompany__card">
              <h3 className="ourcompany__card-title">Quiénes somos</h3>
              <p className="ourcompany__text">
                Contamos con un equipo de profesionales que trabaja arduamente
                para ofrecer la mejor solución a las necesidades de cada
                cliente. Nuestro personal se encuentra especializado en comercio
                exterior, brindando respuestas efectivas en cada operación.
              </p>
            </div>

            <div className="ourcompany__card ourcompany__card--highlight">
              <h3 className="ourcompany__card-title">Nuestro objetivo</h3>
              <p className="ourcompany__text">
                Nuestro objetivo principal es el abastecimiento sostenido de
                nuestros clientes, ofreciendo siempre la mayor calidad y
                excelencia en los productos que comercializamos.
              </p>
            </div>

            <div className="ourcompany__card">
              <h3 className="ourcompany__card-title">Presencia internacional</h3>
              <p className="ourcompany__text">
                Situada en Buenos Aires y con base de operaciones en Estados
                Unidos y Canadá, Cereales Nohrd S.A. cubre una amplia gama de
                productos a nivel internacional.
              </p>
              <p className="ourcompany__text">
                Nos gustaría invitarlo a conocer nuestros servicios, forjados a
                través de una larga experiencia y un compromiso total.
              </p>
            </div>
          </div>

          <aside className="ourcompany__side">
            <div className="ourcompany__panel">
              <p className="ourcompany__panel-label">Nuestro mercado</p>
              <h3 className="ourcompany__panel-title">
                Mercados internacionales donde operamos
              </h3>

              <div className="ourcompany__markets">
                {markets.map((market) => (
                  <span key={market.name} className="ourcompany__market-pill">

                    <ReactCountryFlag
                      countryCode={market.code}
                      svg
                      style={{
                        width: "1.6em",
                        height: "1.6em",
                        marginRight: "10px"
                      }}
                    />
                    {market.name}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default OurCompany;