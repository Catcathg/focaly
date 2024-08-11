import React from 'react'
import Logo from '../src/assets/focaly-logo.jpeg'
import Carrousel from '../Components/CarrouselGoPro12'
import './GoPro11.css';
import Accordion from '../Components/Accordion'
import CalendrierGoPro12 from '../Components/CalendrierGoPro12'
import { Link } from "react-router-dom";

function GoPro12() {
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
            <div className="container">
                <div className="section">
                    <Carrousel />
                    <div className="description">
                        <h1>GoPro Hero 12</h1>
                        <Accordion />
                    </div>
                </div>
            </div>
            <div className="calendrier">
                <p className="dates">Choisissez vos dates de location (4 jours minimum)</p>
                <CalendrierGoPro12 />
            </div>

        </>
    )
}

export default GoPro12