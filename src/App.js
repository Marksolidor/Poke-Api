import React from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import {getPokemonData, getPokemons} from "./api";

const {useState, useEffect} = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);



//obtiene los datos de los pokes para mandar a renderizar en la funcion padre
  const fetchPokemons = async() => {
    try{
      setLoading(true);
      const data = await getPokemons(9, 9 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises) //no deja correr el codigo hasta regresar todo el array de promesas anterior
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 9));
      
    } catch (err) {}
  };

//renderiza una vez el llamado a la api
  useEffect(() => {
  fetchPokemons();
  }, [page])
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <SearchBar/>
      { loading ?
      <div>Cargando pokemons...</div>:
        <Pokedex pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        total={total}
        />
  
        }
    </div>

    </>
  );
}