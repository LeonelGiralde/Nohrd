import ReactCountryFlag from "react-country-flag";
import "../styles/OurNetwork.css";
import translations from "../translations";

function OurNetwork({ language = "es" }) {
  const t = translations[language]?.network || translations.es.network;
  const network = t.items || [];

  return (
    <section id="red-global" className="network">
      <div className="network__container">
        <div className="network__top">
          <div className="network__header">
            <p className="network__eyebrow">{t.eyebrow}</p>
            <h2 className="network__title">{t.title}</h2>
            <p className="network__text">{t.text}</p>
          </div>

          <aside className="network__summary">
            <div className="network__summary-card">
              <span className="network__summary-number">
                {t.summary.countriesNumber}
              </span>
              <span className="network__summary-label">
                {t.summary.countriesLabel}
              </span>
            </div>

            <div className="network__summary-card">
              <span className="network__summary-number">
                {t.summary.coverageNumber}
              </span>
              <span className="network__summary-label">
                {t.summary.coverageLabel}
              </span>
            </div>

            <div className="network__summary-card">
              <span className="network__summary-number">
                {t.summary.categoriesNumber}
              </span>
              <span className="network__summary-label">
                {t.summary.categoriesLabel}
              </span>
            </div>
          </aside>
        </div>

        <div className="network__grid">
          {network.map((item) => (
            <article key={item.country} className="network__card">
              <div className="network__card-header">
                <ReactCountryFlag
                  countryCode={item.code}
                  svg
                  className="network__flag"
                  title={item.country}
                />
                <h3 className="network__country">{item.country}</h3>
              </div>

              <p className="network__products">{item.products}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurNetwork;