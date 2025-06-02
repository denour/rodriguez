import React, {useEffect, useState} from 'react';
import './home.scss';
import Header from '../../header/Header'
import { Link } from "react-scroll";
import axios from 'axios';

const Home: React.FC = () => {
    const [buyPrice, setBuyPrice] = useState(0.0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                // Usando una API alternativa para el tipo de cambio
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
                if (response.data && response.data.rates && response.data.rates.MXN) {
                    const buyPrice = parseFloat(response.data.rates.MXN).toFixed(3);
                    setBuyPrice(Number(buyPrice));
                    setError(null);
                } else {
                    setError('No se pudo obtener el tipo de cambio');
                }
            } catch (err) {
                console.error('Error al obtener el tipo de cambio:', err);
                setError('Error al obtener el tipo de cambio');
                // Valor por defecto en caso de error
                setBuyPrice(17.50);
            }
        };

        fetchExchangeRate();
        // Actualizar cada 5 minutos
        const interval = setInterval(fetchExchangeRate, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='home' id="home">
            <Header />
            <div className="slider">
                <div className="slider-item">
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: -1
                        }}
                    >
                        <source src="video.mp4" type="video/mp4" />
                    </video>
                    <h1><strong>Movemos</strong> el mundo <br/>
                        <strong>a tu favor.</strong></h1>
                    <div className="currencyrates">
                        <div>
                            <h4>TIPO DE CAMBIO</h4>
                            <p>Cambio</p>
                            {error ? (
                                <p className="error">{error}</p>
                            ) : (
                                <p className="price">${buyPrice}</p>
                            )}
                        </div>
                    </div>
                </div>
                <Link spy={true}
                      smooth={true}
                      activeClass="active"
                      className="slideDownArrow"
                      offset={-70}
                      duration= {500} to="nosotros"><img src='home-arrow.png' alt="arrow button" /></Link>
            </div>
        </div>
    );
}

export default Home;
