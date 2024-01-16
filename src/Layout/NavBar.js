import React from "react";
import { Link } from 'react-router-dom'

function NavBar({ additionalPath }) {
  console.log(additionalPath);
  return (
    <div className="container text-black">
        <p><Link to="/">Home</Link>{additionalPath}</p>
    </div>
  );
}

export default NavBar;
