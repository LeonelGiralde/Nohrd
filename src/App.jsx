import { useState } from "react";
import "./styles/App.css";

import Header from "./component/Header";
import Home from "./component/Home";
import Empresa from "./component/OurCompany";
import Productos from "./component/ProductsCarousel";
import RedGlobal from "./component/OurNetwork";
import Contacto from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const [language, setLanguage] = useState("es");

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} />

      <main>
        <Home language={language} />
        <Empresa language={language} />
        <Productos language={language} />
        <RedGlobal language={language} />
        <Contacto language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;