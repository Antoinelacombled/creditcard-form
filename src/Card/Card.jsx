import React, { useRef, useEffect, useState } from 'react';
import './card.scss';
import chipcard from '../../img/chipcard.png';
import logoMastercard from '../../img/Mastercard.png';
import logoVisa from '../../img/Visa.png';

const Card = ({ cardNumber, cardHolder, cardExpiry, onClickCvv }) => {
   
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const centerX = card.offsetWidth / 2;
        const centerY = card.offsetHeight / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const rotateX = (centerY - mouseY) / 20;
        const rotateY = (mouseX - centerX) / 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };


    useEffect(() => {
        const cardLight = document.querySelector('.card-light');

        const handleMouseMoveDocument = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cardLight.style.backgroundPosition = `${posX}px ${posY}px`;
        };

        document.addEventListener('mousemove', handleMouseMoveDocument);

        return () => {
            document.removeEventListener('mousemove', handleMouseMoveDocument);
        };
    }, []);

    let logoToShow = null;

    if (cardNumber.charAt(0) === '4') {
        logoToShow = logoVisa;
    } else if (cardNumber.charAt(0) === '5') {
        logoToShow = logoMastercard
    }

    return (
        <main id="app">
            <div
                className="credit-card"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="card-front">
                    <div className="card-light"></div>
                    <div className="card-bg"></div>
                    {logoToShow && <img src={logoToShow} className="logo" alt="Logo" />}
                    <img src={chipcard} className="chip" alt="Chip" />

                    <div className="number">{cardNumber}</div>
                    <div className="name">{cardHolder}</div>
                    <div className="expiry">{cardExpiry}</div>
                    <svg className="contactless" role="img" viewBox="0 0 24 24" aria-label="Contactless">
                    </svg>
                </div>
            </div>
        </main>
    );
};

export default Card;
