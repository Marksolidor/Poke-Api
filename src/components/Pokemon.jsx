import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
      <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div>
        <div className="pokemon-info">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
      </div>
      <div className="pokemon-types">
        {pokemon.types.map((type, idx) => {
          return <div key={idx}>{type.type.name} </div>;
        })}
      </div>
    </div>
  );
};

export default Pokemon;
