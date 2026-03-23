import "../styles/ProductsCarousel.css";
import translations from "../translations";

import aceite from "../img/Carrusel/aceite.jpg";
import carne from "../img/Carrusel/carne.avif";
import conservas from "../img/Carrusel/conservas.jpg";
import frutas from "../img/Carrusel/frutas.jpg";
import harina from "../img/Carrusel/harina.avif";
import lacteos from "../img/Carrusel/lacteos.jpg";
import legumbres from "../img/Carrusel/legumbres.avif";
import mani from "../img/Carrusel/mani.avif";
import semillas from "../img/Carrusel/semillas_girasol.jpg";
import soja from "../img/Carrusel/soja.jpeg";
import trigo from "../img/Carrusel/trigo.jpg";
import verduras from "../img/Carrusel/verduras.jpg";
import vino from "../img/Carrusel/vino.jpg";

const productImages = [
  aceite,
  carne,
  conservas,
  frutas,
  harina,
  lacteos,
  legumbres,
  mani,
  semillas,
  soja,
  trigo,
  verduras,
  vino,
];

function ProductsCarousel({ language = "es" }) {
  const t = translations[language]?.products || translations.es.products;

  const products = t.items.map((name, index) => ({
    name,
    image: productImages[index],
  }));

  const duplicatedProducts = [...products, ...products];

  return (
    <section className="products-carousel" id="productos">
      <div className="products-carousel__container">
        <div className="products-carousel__header">
          <p className="products-carousel__eyebrow">{t.eyebrow}</p>
          <h2 className="products-carousel__title">{t.title}</h2>
          <p className="products-carousel__text">{t.text}</p>
        </div>

        <div className="products-carousel__viewport">
          <div className="products-carousel__track">
            {duplicatedProducts.map((product, index) => (
              <article
                key={`${product.name}-${index}`}
                className="products-carousel__card"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="products-carousel__overlay" />
                <h3 className="products-carousel__card-title">{product.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsCarousel;