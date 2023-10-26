import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/carousel/Carousel';
import Footer from './components/footer/footer';
import HomeContent from './components/home-content/HomeContent';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselComponent />
      <div className="content">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
