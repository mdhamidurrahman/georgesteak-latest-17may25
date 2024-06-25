import './App.css'
import './responsive.css'
import { Routes, Route,} from "react-router-dom";
import Home from './pages/home/Home';
import Footer from './components/layout/Footer';
import SlickSlider from './components/SlickSlider';
import NavBar from './components/layout/Navbar';
function App() {
  return (
    <main className='myMain'>
     <NavBar/>
      <SlickSlider/>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     <Footer/>
    </main>
  )
}

export default App
