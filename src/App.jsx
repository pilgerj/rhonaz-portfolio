import { Routes, Route } from 'react-router-dom';
import Y2KLayout from './components/Y2KLayout';
import MainContent from './components/MainContent';
// import MainContent from './components/AsciiArt';
import ComprovanteContent from './components/Comprovante/index.tsx';
import './App.css';

function App() {
  return (
    <Y2KLayout>
      {/* <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/comprovante-pagamento" element={<ComprovanteContent />} />
      </Routes> */}
    </Y2KLayout>
  );
}

export default App;