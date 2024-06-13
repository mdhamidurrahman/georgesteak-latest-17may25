import './App.css'
import { Routes, Route,} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/layout/Navbar';
import NavBar from './components/layout/NavBarText';
function App() {
  return (
    <>
     <Navbar/>
     {/* <NavBar/> */}
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
    </>
  )
}

export default App
