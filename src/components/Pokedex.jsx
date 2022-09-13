import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) =>{
    console.log(props)
    const {pokemons} = props;
    return(
        <div>
            <div>
            <h1>Pokedex</h1>
            <div>Pagination</div>
            </div>
            <div>
                {pokemons.map((pokemon, idx) =>{
                    return(
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                }
                
                )}
            </div>
        </div>
    );
};
export default Pokedex