import React from "react";
import { Link } from "react-router-dom";

function CardForm({front, setFront, back, setBack, handleSubmit}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="Front">Front
          <textarea 
          value={front}
          onChange={(e) => setFront(e.target.value)} />
        </label>
        <label for="Back">Back
        <textarea
        value={back}
        onChange={(e) => setBack(e.target.value)}
        />
        </label>
        <Link to="/">cancel</Link>
        <button onClick={handleSubmit}>Add Card</button>
      </form>
    </>
  );
}

export default CardForm;
