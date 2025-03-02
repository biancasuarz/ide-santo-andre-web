import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import SejaVoluntario from './pages/sejavoluntario/SejaVoluntario';
import Igrejas from './pages/igrejas/Igrejas';
import Contato from './pages/contato/Contato';

function App() {
  return (
    <Router>
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/sejavoluntario" element={<SejaVoluntario />} />
          <Route path="/igrejas" element={<Igrejas />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
     < Footer />
    </Router>
  );
}

export default App;
