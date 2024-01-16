import React from "react";
import { Link } from "react-router-dom";


function NotEnoughCards({cards}) {
  return (
    <>
        <p>Not enough cards. You need at least 3 cards to study. There are currently {cards ? cards.length: 0} cards</p>
        <Link to="">Add Cards</Link>
    </>
  );
}

export default NotEnoughCards;
