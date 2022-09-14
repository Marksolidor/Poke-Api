import React from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
//import Sort from "./components/Sort";
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
} from "./components//MiApi";
import Sort from "./components/Sort";

const { useState, useEffect } = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  //obtiene los datos de los pokes para mandar a renderizar en la funcion padre
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(9, 9 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises); //no deja correr el codigo hasta regresar todo el array de promesas anterior
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 9));
      setNotFound(false);
    } catch (err) {}
  };

  //renderiza una vez el llamado a la api
  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  //establece que si no hay pokemon en la barra de busqueda devuelva el arreglo y previene la paginación
  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };
  return (
    <div>
      <Navbar />
      <div className="App">
        <SearchBar onSearch={onSearch} />
        <Sort pokemons={pokemons} setPokemons={setPokemons} />
        {notFound ? (
          <div className="not-found-text">
            No se encontro el Pokemon que buscabas
          </div>
        ) : (
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}
      </div>
    </div>
  );
}
