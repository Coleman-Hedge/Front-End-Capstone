import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteDeck, listDecks } from "../utils/api";

function Home() {
    const [decks, setDecks] = useState([]);
    const handleDelete = (deckId) => {
        if(window.confirm("Delete this Deck?\nYou will not be able to recover it.")) {
            deleteDeck(deckId);
            setDecks([]);
        }
    }

    useEffect(() => {
        listDecks().then((result) => {
            setDecks(result);
        });
    }, [decks]);

    return (
        <div className="container text-black">
            <Link to="/decks/new">Create Deck</Link>
            {decks.map((deck, index) => {
                return <div key={index}>
                    <h3>{deck.name}</h3> 
                    <p>{deck.cards.length} cards</p>
                    <p>{deck.description}</p>
                    <Link to={`/decks/${deck.id}`}>View</Link>
                    <Link to={`/decks/${deck.id}/study`}>Study</Link>
                    <button onClick={() => handleDelete(deck.id)}>Delete</button>
                </div>
            })}
        </div>
    );
}

export default Home;
