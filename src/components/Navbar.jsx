import React from "react";

const Navbar = () => {

  let imgUrl =
    "https://www.pngplay.com/wp-content/uploads/11/Pokemon-Yellow-Logo-PNG-Pic-Background.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
    </nav>
  );
};

export default Navbar;