import './App.css';
import Header from './components/Header/Header';
import WilderCard from './components/WilderCard/WilderCard';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Header/>
    <main className="container">
      <h2>Wilders</h2>
      <WilderCard/>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
