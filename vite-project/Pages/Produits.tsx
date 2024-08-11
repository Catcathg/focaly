import React from 'react'
import './Produits.css';
import { Link } from "react-router-dom";

//images 
import Logo from '../src/assets/focaly-logo.jpeg'

//pages
import Card1 from '../Components/CardProduct1'
import Card2 from '../Components/CardProduct2'

function Produits() {
    return (
        <>
            <nav>
                <img className="Logo" src={Logo} alt="Logo" />
                <h1>
                    <Link to="/" className="produits-link">
                        Nos produits
                    </Link>
                </h1>
                <h2>Nos accessoires</h2>
            </nav>
            <h3>Nos Caméras Embarquées</h3>
            <div className="produit">
                <Card1 />
                <Card2 />
            </div>

        </>

    )
}

export default Produits