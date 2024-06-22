import './App.css'
import { Routes, Route,} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
