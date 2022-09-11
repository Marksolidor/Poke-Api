import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList'
import Pagination from './components/Pagination';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  //const [loading, setLoading] = useState(true)

  useEffect(() => {
   // setLoading(true)
    const pokeApiConsult = async () => {
      try {
      const response = await fetch (currentPageUrl)
      const data = await response.json()
        
      } catch (err) {}
    
        //setLoading(false)
        setNextPageUrl(data.next)
        setPrevPageUrl(data.previous)
        setPokemon(data.results.map(p => p.name))
  
    }

    return pokeApiConsult
  },)

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

//if (loading) return "Loading..."
  
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;