import React from "react";

const Sort = (props) => {
  const { pokemons, setPokemons } = props;
  return (
    <>
    <label className="order-text">Ordenar de manera:</label>
      <div className="btn-container">
        <button
          className="btn-order"
          onClick={() => {
            const sortedList = [...pokemons].sort((a, b) =>
              a.id > b.id ? 1 : a.id < b.id ? -1 : 0
            );
            setPokemons(sortedList);
          }}
        >
          Ascendente
        </button>
        <button
          className="btn-order"
          onClick={() => {
            const sortedList = [...pokemons].sort((a, b) =>
              a.id > b.id ? -1 : a.id < b.id ? 1 : 0
            );
            setPokemons(sortedList);
          }}
        >
          Descendente
        </button>
      </div>
    </>
  );
};

export default Sort;
