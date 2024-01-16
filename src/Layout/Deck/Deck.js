import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../NavBar";
import { readDeck } from "../../utils/api";
import DeckSummary from "./DeckSummary";
import DeckCards from "./DeckCards";

function Deck() {
  const { deckId } = useParams();
  const [loading, setLoading] = useState(true);
  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);

  const handleSetCards = (updated) => {
    setCards(updated)
  }
  useEffect(() => {
      readDeck(deckId)
          .then((result) => {
              console.log(result.cards);
              setDeck(result);
              setCards(result.cards);
          }).catch((error) => {
              console.log(error);
          }).finally(() => {
              setLoading(false);
          });
  }, [cards]);
 

  return (
    <>
        <NavBar additionalPath={<Link to={`/decks/${deck.id}`}>/{deck.name}</Link>} />
        {loading && <p> Loading...</p>}
        <>
            <DeckSummary deck={deck} />
            <DeckCards cards={cards} handleSetCards={handleSetCards}/>
        </>
    </>
  );
}

export default Deck;
