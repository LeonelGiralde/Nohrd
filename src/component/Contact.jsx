import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <p className="contact__eyebrow">CONTACTO</p>

          <h2 className="contact__title">Información de contacto</h2>

          <p className="contact__text">
            Si desea recibir más información sobre nuestros productos o
            establecer una relación comercial, puede comunicarse directamente
            con nuestro equipo o completar el formulario.
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__details">
              <div className="contact__block">
                <div className="contact__block-title">
                  <span className="contact__icon">📍</span>
                  <h4>Dirección</h4>
                </div>
                <p>Tucumán 1484 2ºB</p>
                <p>Capital Federal</p>
                <p>(C1050AAD) Buenos Aires</p>
                <p>Argentina</p>
              </div>

              <div className="contact__block">
                <div className="contact__block-title">
                  <span className="contact__icon">📞</span>
                  <h4>Teléfono</h4>
                </div>
                <p>(+54-11) 4371-4767</p>
              </div>

              <div className="contact__block">
                <div className="contact__block-title">
                  <span className="contact__icon">✉️</span>
                  <h4>Email</h4>
                </div>
                <p>sales@cereales-nohrd.com</p>
              </div>
            </div>
          </div>

          <form
            method="POST"
            action="https://formsubmit.co/giraldeleonel22@gmail.com"
            className="contact__form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Nuevo mensaje desde la web de Cereales Nohrd"
            />

            <div className="contact__row">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Empresa"
              />
            </div>

            <div className="contact__row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Mensaje"
              required
            />

            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;