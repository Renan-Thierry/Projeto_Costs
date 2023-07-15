import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contatos from './components/pages/Contatos';
import Home from './components/pages/Home';
import CriarProjetos from './components/pages/CriarProjetos';
import Projetos from './components/pages/Projetos';
import Sobre from './components/pages/Sobre';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import EditProjeto from './components/pages/EditProjeto';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contatos" element={<Contatos />} />
            <Route path="/CriarProjetos" element={<CriarProjetos />} />
            <Route path="/Projetos" element={<Projetos />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/EditProjeto/:id" element={<EditProjeto />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
