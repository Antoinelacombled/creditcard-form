import './App.css'
import Inputs from '../Inputs/Inputs';
import Card from '../Card/Card';
import { useState } from 'react';
import CardVerso from '../CardVerso/cardverso';

const App = () => {
    const [cardNumber, setCardNumber] = useState('**** **** **** ****');
    const [cardHolder, setCardHolder] = useState('Tim Cook');
    const [cardExpiry, setCardExpiry] = useState('MM/YY');
    const [showCardVerso, setShowCardVerso] = useState(false);

    return (
        <div className='app'>
            <Inputs
                cardNumber={cardNumber}
                cardHolder={cardHolder}
                cardExpiry={cardExpiry}
                handleCardNumber={setCardNumber}
                handleCardHolder={setCardHolder}
                handleCardExpiry={setCardExpiry}
                handleShowCardVerso={setShowCardVerso}
            />
            {showCardVerso ? (
                <CardVerso
                    cardHolder={cardHolder}
                />) :
                (<Card
                    cardNumber={cardNumber}
                    cardHolder={cardHolder}
                    cardExpiry={cardExpiry}
                />
                )}
        </div>
    );
};

export default App;