import React from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import {getPokemons} from "./api";

const {useState, useEffect} = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);


//obtiene los datos de los pokes para mandar a renderizar en la funcion padre
  const fetchPokemons = async() => {
    try{
      const data = await getPokemons();
      console.log(data)
      setPokemons(data.results)
    } catch(err){

    }
  }

//renderiza una vez el llamado a la api
  useEffect(() => {
  fetchPokemons();
  }, [])
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <SearchBar/>
      <Pokedex pokemons={pokemons}/>
    </div>

    </>
  );
}