import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Navber from './components/navber/Navber';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navber/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
