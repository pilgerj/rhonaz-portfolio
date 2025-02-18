// import './App.css'
// import SocialEmbeds from './components/SocialEmbeds'

// const App = () => {
//   return (
//     <>
//       <h1>dj rhonaz</h1>
//       <SocialEmbeds/>
      
//     </>
//   )
// }

// export default App
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;