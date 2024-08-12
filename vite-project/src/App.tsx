import { Routes, Route } from "react-router-dom";
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// pages
import Produits from '../Pages/Produits'
import GoPro11 from '../Pages/GoPro11'
import GoPro12 from '../Pages/GoPro12'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Produits />} />
        <Route path="/gopro11" element={<GoPro11 />} />
        <Route path="/gopro12" element={<GoPro12 />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App;