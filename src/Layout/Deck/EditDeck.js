import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import NavBar from "../NavBar";
import { readDeck, updateDeck } from "../../utils/api";



function EditDeck() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const { deckId } = useParams();
    const [loading, setLoading] = useState(true);
    const [deck, setDeck] = useState({});

    const history = useHistory();
    useEffect(() => {
        readDeck(deckId)
            .then((result) => {
                console.log(result.cards);
                setDeck(result);
                setName(result.name);
                setDescription(result.description);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            });
    }, [deckId]);

    const handleSubmit = (event) => {
      event.preventDefault();
      const newDeck = {
          "id": deck.id,
          "name": name,
          "description": description
        }
      updateDeck(newDeck);
      history.push("/");
    };

    return (
      <>
        <NavBar additionalPath={<p><Link to={`/decks/${deck.id}`}>{deck.name}</Link>/Edit Deck</p>}/>
        <form onSubmit={handleSubmit}>
          <label for="Name">Name
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          </label>
          <label for="Description">Description
          <input
          type="textArea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
          </label>
          <Link to="/">cancel</Link>
          <input type="submit" />
        </form>
      </>
    );
  }

export default EditDeck;
