import React from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import {getPokemons} from "./api";

const {useState, useEffect} = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async() => {
    try{
      const data = await getPokemons();
      console.log(data)
    } catch(err){

    }
  }

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
      <Pokedex/>
    </div>

    </>
  );
}