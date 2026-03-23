import './styles/App.css';

import Header from './component/Header';
import Home from './component/Home';
import Empresa from './component/OurCompany';
import Productos from './component/Products';
import RedGlobal from './component/OurNetwork';
import Contacto from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Home />
        <Empresa />
        <Productos />
        <RedGlobal />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;