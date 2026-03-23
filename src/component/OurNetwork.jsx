import ReactCountryFlag from "react-country-flag";
import "../styles/OurNetwork.css";

const network = [
  { country: "Brasil", code: "BR", products: "Azúcar" },
  { country: "Canadá", code: "CA", products: "Legumbres y Cereales" },
  { country: "Chile", code: "CL", products: "Pescados" },
  { country: "China", code: "CN", products: "Granos, Legumbres, Enlatados" },
  { country: "Estados Unidos", code: "US", products: "Legumbres, Cereales, Frutas Secas" },
  { country: "Egipto", code: "EG", products: "Legumbres" },
  { country: "Etiopía", code: "ET", products: "Garbanzos" },
  { country: "India", code: "IN", products: "Maíz, Semillas de Sésamo, Garbanzos" },
  { country: "Myanmar", code: "MM", products: "Legumbres" },
  { country: "Pakistán", code: "PK", products: "Arroz y Maíz" },
  { country: "Paraguay", code: "PY", products: "Porotos Negros, Semillas de Sésamo, Azúcar Orgánica" },
  { country: "Perú", code: "PE", products: "Legumbres y Enlatados" },
  { country: "Tailandia", code: "TH", products: "Arroz y Conservas" },
  { country: "Vietnam", code: "VN", products: "Arroz" },
];

function OurNetwork() {
  return (
    <section id="red-global" className="network">
      <div className="network__container">
        <div className="network__top">
          <div className="network__header">
            <p className="network__eyebrow">RED GLOBAL</p>
            <h2 className="network__title">Alcance internacional</h2>
            <p className="network__text">
              Cereales Nohrd S.A cuenta con una red de asociados alrededor del
              mundo que nos permite ofrecer una amplia variedad de productos de
              distintos orígenes, garantizando flexibilidad comercial,
              abastecimiento sostenido y estándares de calidad en cada operación.
            </p>
          </div>

          <aside className="network__summary">
            <div className="network__summary-card">
              <span className="network__summary-number">14</span>
              <span className="network__summary-label">Países asociados</span>
            </div>

            <div className="network__summary-card">
              <span className="network__summary-number">Global</span>
              <span className="network__summary-label">Cobertura comercial</span>
            </div>

            <div className="network__summary-card">
              <span className="network__summary-number">Múltiples</span>
              <span className="network__summary-label">Orígenes y categorías</span>
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