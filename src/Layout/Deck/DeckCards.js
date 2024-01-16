import React from "react";
import { Link } from "react-router-dom";
import { deleteCard } from "../../utils/api";


function DeckCards({ cards, handleSetCards }) {
    const handleDelete = (cardId) => {
        if(window.confirm("Delete this card?\nYou will not be able to recover it.")) {
            deleteCard(cardId);
            handleSetCards([]);
        }
    }

    if(!cards) {
        return <p>No Cards Available</p>
    }

    return (
        <>
            <h3>Cards</h3>
            {cards.map((card, index) => {
                return <div className="card" key={index}>
                    <p>{card.front}</p>
                    <p>{card.back}</p>
                    <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>Edit</Link>
                    <button onClick={() => handleDelete(card.id)}>Delete</button>
                </div>
            })}
        </>
  );
}

export default DeckCards;
