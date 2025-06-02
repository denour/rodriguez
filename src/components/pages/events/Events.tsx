import React from "react";
import './events.scss';

const Events: React.FC = () => {
    return (
        <div className="events">
            <div className="slider">
                <a href="/#" onClick={(e) => {e.preventDefault()}} className="arrow left"><img src="slider-left-arrow.png" alt="arrow"/></a>
                <div className="slider-item" style={{background: 'url("events.png") no-repeat'}}>
                    <h3>Próximos <strong>Eventos</strong></h3>
                    <a href="/#">INSCRÍBETE</a>
                </div>
                <a href="/#" onClick={(e) => {e.preventDefault()}} className="arrow right"><img src="slider-right-arrow.png"  alt="arrow" /></a>
                <ul className="bullets">
                    <li className="active" onClick={() => {}} />
                    <li />
                    <li />
                </ul>
            </div>
        </div>
    );
}

export default Events;
