import React from "react";
import { searchPokemon } from "../api";
const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");
  const searching = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const findPoke = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <>
      <div>
        <input placeholder="Buscar pokemon" onChange={searching} />
      </div>
      <div>
        <button onClick={findPoke}> Buscar </button>
      </div>
      <div>
        {pokemon && (
          <div>
            <div>{pokemon.name}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
