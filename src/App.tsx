import './App.css'
import { Routes, Route,} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/layout/Navbar';
import NavBar from './components/layout/NavBarText';
import Footer from './components/layout/Footer';
function App() {
  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
