import { useState, useEffect } from 'react';
import './Produits.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// images
import Logo from '../src/assets/focaly-logo.jpeg';
import GoPro1 from '../src/assets/gopro1.png';
import GoPro2 from '../src/assets/gopro2.jpeg';
import GoPro3 from '../src/assets/gopro3.jpeg';
import GoPro4 from '../src/assets/gopro4.png';
import GoPro112 from '../src/assets/gopro112.jpeg';
import GoPro212 from '../src/assets/gopro212.jpeg';
import GoPro312 from '../src/assets/gopro312.jpeg';
import GoPro412 from '../src/assets/gopro412.jpeg';

// Composants
import ProductImageGallery from '../Components/CarrouselImages';

function Produits() {
    const [selectedModel, setSelectedModel] = useState('GoPro11');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [durationMessage, setDurationMessage] = useState('');
    const [totalCost, setTotalCost] = useState(0);

    const imagesGoPro11 = [GoPro1, GoPro2, GoPro3, GoPro4];
    const imagesGoPro12 = [GoPro112, GoPro212, GoPro312, GoPro412];

    const images = selectedModel === 'GoPro11' ? imagesGoPro11 : imagesGoPro12;

    const dailyPrice = selectedModel === 'GoPro11' ? 5 : 10;

    const description = selectedModel === 'GoPro11'
        ? "La GoPro HERO 11 est une caméra d'action haut de gamme dotée de nombreuses fonctionnalités. Enregistrez des vidéos en 5,3K ou des photos en 24,7Mpx. Capturez vos précieux moments en famille ou emportez-la avec vous lors d'activités de plein air ou en voyage."
        : "La GoPro HERO 12 est une caméra d'action haut de gamme dotée de nombreuses fonctionnalités. Enregistrez des vidéos en 5,3K ou des photos en 24,7Mpx. Capturez vos précieux moments en famille ou emportez-la avec vous lors d'activités de plein air ou en voyage.";

    const handleReservationClick = () => {
        setShowCalendar(!showCalendar);
    };

    const handleDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start || null);
        setEndDate(end || null);
    };

    useEffect(() => {
        if (startDate && endDate) {
            const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;
            if (days < 4) {
                setDurationMessage(
                    `La durée de location doit être d'au moins <span style='color: red;'>4 jours</span>.`
                );
                setTotalCost(0);
            } else {
                setDurationMessage('');
                setTotalCost(days * dailyPrice);
            }
        }
    }, [startDate, endDate, dailyPrice]);

    return (
        <>
            <nav>
                <img className="Logo" src={Logo} alt="Logo" />
                <a href="/" className="produits-link">Nos produits</a>
                <a href="/">Inspiration</a>
                <a href="/">Nos offres</a>
                <a href="/">Nos packs</a>
                <p className="connexionButton">Connexion</p>
            </nav>

            <div className="hero">
                <div className="gallery-section">
                    <ProductImageGallery images={images} />
                </div>

                <div className="model-selection">
                    <p className="variant">Choisissez entre nos variantes : </p>
                    <div className="button1">
                        <button
                            className={selectedModel === 'GoPro11' ? 'selected' : ''}
                            onClick={() => setSelectedModel('GoPro11')}
                        >
                            GoPro 11
                        </button>
                    </div>
                    <div className="button2">
                        <button
                            className={selectedModel === 'GoPro12' ? 'selected' : ''}
                            onClick={() => setSelectedModel('GoPro12')}
                        >
                            GoPro 12
                        </button>
                    </div>

                    <div className="price">
                        <p className="prix">{dailyPrice}€ / jour</p>
                    </div>

                    <div className="description">
                        <p>{description}</p>
                    </div>

                    <div className="reservation">
                        <button onClick={handleReservationClick} className="reservation-button">
                            Réserver
                        </button>
                        {showCalendar && (
                            <div className="date-picker">
                                {durationMessage && (
                                    <div
                                        className="duration-message"
                                        dangerouslySetInnerHTML={{ __html: durationMessage }}
                                    />
                                )}
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    startDate={startDate || undefined}
                                    endDate={endDate || undefined}
                                    selectsRange
                                    inline
                                    minDate={new Date()}
                                    shouldCloseOnSelect={false}
                                    dayClassName={(date) => {
                                        if (startDate && endDate) {
                                            const days = Math.ceil((date.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;
                                            if (days < 4) {
                                                return 'disabled-date';
                                            }
                                        }
                                        return '';
                                    }}
                                />
                                <div className="date-info">
                                    <p>Date de début: {startDate ? startDate.toLocaleDateString() : 'Non sélectionnée'}</p>
                                    <p>Date de fin: {endDate ? endDate.toLocaleDateString() : 'Non sélectionnée'}</p>
                                    <p>Total : {totalCost}€</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Produits;
