import './App.css'
import { Routes, Route,} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SlickSlider from './components/SlickSlider';
function App() {
  return (
    <main className='myMain'>
     <Navbar/>
      <SlickSlider/>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     <Footer/>
    </main>
  )
}

export default App
