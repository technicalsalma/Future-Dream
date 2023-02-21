import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/footer/Footer';
import Navber from './components/navber/Navber';
import WhatsApp from './components/WhatsApp';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
      <WhatsApp/>
      <Footer/>
    </div>
  );
}

export default App;
