import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../NavBar";
import StudyHeader from "./StudyHeader"
import { readDeck, deleteDeck } from "../../utils/api";
import StudyBody from "./StudyBody";
import NotEnoughCards from "./NotEnoughCards";

function Study() {
    const { deckId } = useParams();
    const [loading, setLoading] = useState(true);
    const [deck, setDeck] = useState([]);

    
    useEffect(() => {
        readDeck(deckId)
            .then((result) => {
                console.log(result);
                setDeck(result);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            });
    }, [deckId]);

    return (
        <div className="container text-black">
            <NavBar additionalPath={<p><Link to={`/decks/${deck.id}`}>/{deck.name}</Link>/Study</p>} />
            {loading && <p> Loading...</p>}

            <StudyHeader deckName={deck.name} />
            {deck.cards && deck.cards.length > 2 ? (
                <StudyBody cards={deck.cards} />
            ) : (
                <NotEnoughCards cards={deck.cards}/>
            )}
        </div>
      );
}

export default Study;