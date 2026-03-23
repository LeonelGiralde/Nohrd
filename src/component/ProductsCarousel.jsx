import "../styles/ProductsCarousel.css";

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

const products = [
  { name: "Aceite", image: aceite },
  { name: "Carne", image: carne },
  { name: "Conservas", image: conservas },
  { name: "Frutas", image: frutas },
  { name: "Harina", image: harina },
  { name: "Lácteos", image: lacteos },
  { name: "Legumbres", image: legumbres },
  { name: "Maní", image: mani },
  { name: "Semillas de Girasol", image: semillas },
  { name: "Soja", image: soja },
  { name: "Trigo", image: trigo },
  { name: "Verduras", image: verduras },
  { name: "Vino", image: vino },
];

const duplicatedProducts = [...products, ...products];

function ProductsCarousel() {
  return (
    <section className="products-carousel" id="productos">
      <div className="products-carousel__container">
        <div className="products-carousel__header">
          <p className="products-carousel__eyebrow">PRODUCTOS</p>
          <h2 className="products-carousel__title">Nuestro portafolio</h2>
          <p className="products-carousel__text">
            Comercializamos una amplia gama de productos alimenticios para
            mercados internacionales, con foco en calidad, continuidad de
            suministro y excelencia comercial.
          </p>
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