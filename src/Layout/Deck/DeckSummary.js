import React from "react";
import { Link } from "react-router-dom";


function DeckSummary({ deck }) {
  return (
    <>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <Link to={`/decks/${deck.id}/edit`}>Edit</Link>
        <Link to={`/decks/${deck.id}/study`}>Study</Link>
        <Link to={`/decks/${deck.id}/cards/new`}>Add Cards</Link>
    </>
  );
}

export default DeckSummary;
