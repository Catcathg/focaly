import { Routes, Route } from "react-router-dom";
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// pages
import Produits from '../Pages/Produits'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Produits />} />
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
}

export default App;