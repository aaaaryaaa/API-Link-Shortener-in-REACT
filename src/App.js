import './App.css';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Showcase from './components/Showcase.js';
import Showcase2 from './components/Showcase2.js';
import UrlShortener from './components/UrlShortener.js';

function App() {
  return (
    <>
      <Navbar/>
      <Showcase/>
      <UrlShortener/>
      <Showcase2/>
      <Footer/>
    </>
  );
}

export default App;
