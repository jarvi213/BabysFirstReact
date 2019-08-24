import React from 'react';
import './makeCardDiv.css';
import STORE from './store';

function MakeCardDiv() {
    
    const arrayofCards = STORE.allCards.map((card) => {
        return( <div key={card.id} className="divCards">
            <button>delete</button>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            </div>
        )
    }
)

    return arrayofCards;
}

export default MakeCardDiv;