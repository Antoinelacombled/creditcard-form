import React from 'react';
import './inputs.scss';

const Inputs = ({
    cardNumber,
    cardHolder,
    cardExpiry,
    handleCardNumber,
    handleCardHolder,
    handleCardExpiry,
    handleShowCardVerso,
}) => {
    return (
        <div className="inputs-container">
            <div className="input-group">
                <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    placeholder="Card Number"
                    onChange={(e) => handleCardNumber(e.target.value)}
                    onFocus={() => {
                        handleShowCardVerso(false);
                        handleCardNumber('')
                    }}
                />
            </div>
            <div className="input-group">
                <input
                    type="text"
                    id="expirationDate"
                    value={cardExpiry}
                    placeholder="Expiration Date"
                    onChange={(e) => handleCardExpiry(e.target.value)}
                    onFocus={() => handleCardExpiry('')}
                />
            </div>
            <div className="input-group">
                <input
                    type="text"
                    id="cardholder"
                    value={cardHolder}
                    placeholder="Cardholder"
                    onChange={(e) => handleCardHolder(e.target.value)}
                    onFocus={() => handleCardHolder('')}
                />
            </div>
            <div className="input-group">
                <input
                    label="CVV"
                    type="text"
                    id="CVV"
                    placeholder="CVV"
                    onClick={handleShowCardVerso}
                />
            </div>
        </div>
    );
};

export default Inputs;
