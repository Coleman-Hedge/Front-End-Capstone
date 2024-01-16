import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import NavBar from "../NavBar";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const history = useHistory();
  const {deckId, cardId} = useParams();
  const [deck, setDeck] = useState({});
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  useEffect(() => {
      readDeck(deckId)
          .then((result) => {
              console.log("Got deck from db");
              setDeck(result);
          }).catch((error) => {
              console.log(error);
          });
  }, [deckId]);

  useEffect(() => {
    readCard(cardId)
      .then((result) => {
        console.log("got card from db");
        setFront(result.front);
        setBack(result.back);
      })
  }, [cardId]);

  const handleSetFront = (updated) => {
    setFront(updated);
  }

  const handleSetBack = (updated) => {
    setBack(updated);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      "id": cardId,
      "deckId": deck.id,
      "front": front,
      "back": back
    };
    updateCard(newCard);
    history.push("/");
  };

  return (
    <>
      <NavBar 
        additionalPath={<p><Link to={`/decks/{deckId}`}>/{deck.name}</Link>/Edit Card {cardId}</p>}
      />
      <CardForm front={front} setFront={handleSetFront} back={back} setBack={handleSetBack} handleSubmit={handleSubmit} />
    </>
  );
}

export default EditCard;
