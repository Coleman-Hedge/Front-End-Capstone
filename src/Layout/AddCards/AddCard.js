import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import { useParams, Link, useHistory } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

function AddCard() {
  const { deckId } = useParams();
  const [loading, setLoading] = useState(true);
  const [deck, setDeck] = useState({});
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  useEffect(() => {
      readDeck(deckId)
          .then((result) => {
              console.log(result.cards);
              setDeck(result);
          }).catch((error) => {
              console.log(error);
          }).finally(() => {
              setLoading(false);
          });
  }, [deckId]);

  const handleSetFront = (updated) => {
    setFront(updated);
  }

  const handleSetBack = (updated) => {
    setBack(updated);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      "front": front,
      "back": back
    };
    console.log("creating card!");
    createCard(deckId, newCard);
    setFront("");
    setBack("");
  };
  const navBarPath = <p><Link to={`/decks/${deckId}`}>/{deck.name}</Link>/Add Card</p>;
  return (
    <>
      <NavBar additionalPath={navBarPath} />
      <h3>{deck.name}</h3>
      <CardForm 
        front={front} 
        setFront={handleSetFront}
        back={back} 
        setBack={handleSetBack}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default AddCard;
