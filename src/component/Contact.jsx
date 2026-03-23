import "../styles/Contact.css";

const content = {
  es: {
    eyebrow: "CONTACTO",
    title: "Información de contacto",
    text: "Si desea recibir más información sobre nuestros productos o establecer una relación comercial, puede comunicarse directamente con nuestro equipo o completar el formulario.",

    address: "Dirección",
    phone: "Teléfono",
    email: "Email",

    name: "Nombre",
    company: "Empresa",
    emailPlaceholder: "Email",
    phonePlaceholder: "Teléfono",
    message: "Mensaje",

    submit: "Enviar mensaje",

    subject: "Nuevo mensaje desde la web de Cereales Nohrd",
  },

  en: {
    eyebrow: "CONTACT",
    title: "Contact information",
    text: "If you would like more information about our products or wish to establish a business relationship, please contact our team directly or complete the form below.",

    address: "Address",
    phone: "Phone",
    email: "Email",

    name: "Name",
    company: "Company",
    emailPlaceholder: "Email",
    phonePlaceholder: "Phone",
    message: "Message",

    submit: "Send message",

    subject: "New message from Cereales Nohrd website",
  },
};

function Contact({ language = "es" }) {
  const t = content[language];

  return (
    <section id="contacto" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <p className="contact__eyebrow">{t.eyebrow}</p>

          <h2 className="contact__title">{t.title}</h2>

          <p className="contact__text">{t.text}</p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__details">
              <div className="contact__block">
                <div className="contact__block-title">
                  <span className="contact__icon">📍</span>
                  <h4>{t.address}</h4>
                </div>

                <p>Tucumán 1484 2ºB</p>
                <p>Capital Federal</p>
                <p>(C1050AAD) Buenos Aires</p>
                <p>Argentina</p>
              </div>

              <div className="contact__block">
                <div className="contact__block-title">
                  <span className="contact__icon">📞</span>
                  <h4>{t.phone}</h4>
                </div>
                <p>(+54-11) 4371-4767</p>
              </div>

              <div className="contact__block">
                <div className="contact__block-title">
                  <span className="contact__icon">✉️</span>
                  <h4>{t.email}</h4>
                </div>
                <p>sales@cereales-nohrd.com</p>
              </div>
            </div>
          </div>

          <form
            method="POST"
            action="https://formsubmit.co/leonelgiralde22@gmail.com"
            className="contact__form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={t.subject} />

            <div className="contact__row">
              <input
                type="text"
                name="name"
                placeholder={t.name}
                required
              />

              <input
                type="text"
                name="company"
                placeholder={t.company}
              />
            </div>

            <div className="contact__row">
              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder={t.phonePlaceholder}
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder={t.message}
              required
            />

            <button type="submit">{t.submit}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;