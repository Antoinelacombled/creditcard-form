import React from 'react';
import './cardverso.scss';

const CardVerso = ({ cardHolder }) => {
    return (
        <main id="app">
            <div className="card-back">
                <div className="card-light"></div>
                <div className="card-bg"></div>
                <div className="black-line"></div>
                <div className='holder-cvv'>
                    <div className="card-holder-box">
                        <div className="card-holder">
                            {cardHolder}
                        </div>
                    </div>
                    <div className="cvv-box">
                        <div className="cvv">
                            123
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CardVerso;
