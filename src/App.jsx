import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ComprovanteContent from './components/Comprovante/index.tsx';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/comprovante-pagamento" element={<ComprovanteContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;