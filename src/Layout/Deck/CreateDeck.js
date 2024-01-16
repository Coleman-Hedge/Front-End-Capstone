import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar";
import { createDeck } from "../../utils/api";

function CreateDeck() {
  const [name, setName] = useState("Deck Name");
  const [description, setDescription] = useState("Brief description of the deck");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDeck = {
        "name": name,
        "description": description
      }
    createDeck(newDeck);
    history.push("/");
  };

  const handleCancel = () => {
    history.push("/");
  }

  return (
    <>
      <NavBar additionalPath={" / Create Deck"}/>
      <h1>Create Deck</h1>
      <form onSubmit={handleSubmit}>
        <label for="Name">Name
          <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        </label>
        <label for="Description">Description
        <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        </label>
        <button onClick={handleCancel}>cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default CreateDeck;
