import "../styles/OurCompany.css";
import ReactCountryFlag from "react-country-flag";
import translations from "../translations";

function OurCompany({ language = "es" }) {

  const t = translations[language].company;
  const markets = t.countries;

  return (
    <section id="empresa" className="ourcompany">
      <div className="ourcompany__container">

        <div className="ourcompany__header">
          <p className="ourcompany__eyebrow">{t.eyebrow}</p>

          <h2 className="ourcompany__title">{t.title}</h2>

          <p className="ourcompany__lead">
            {t.lead}
          </p>
        </div>

        <div className="ourcompany__grid">

          <div className="ourcompany__content">

            <div className="ourcompany__card">
              <h3 className="ourcompany__card-title">{t.who.title}</h3>
              <p className="ourcompany__text">{t.who.text}</p>
            </div>

            <div className="ourcompany__card ourcompany__card--highlight">
              <h3 className="ourcompany__card-title">{t.objective.title}</h3>
              <p className="ourcompany__text">{t.objective.text}</p>
            </div>

            <div className="ourcompany__card">
              <h3 className="ourcompany__card-title">{t.presence.title}</h3>
              <p className="ourcompany__text">{t.presence.text1}</p>
              <p className="ourcompany__text">{t.presence.text2}</p>
            </div>

          </div>

          <aside className="ourcompany__side">
            <div className="ourcompany__panel">

              <p className="ourcompany__panel-label">
                {t.market.label}
              </p>

              <h3 className="ourcompany__panel-title">
                {t.market.title}
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