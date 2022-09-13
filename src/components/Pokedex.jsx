import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination"

const Pokedex = (props) =>{
    console.log(props)
    const {pokemons} = props;
    return(
        <div>
            <div>
            <h1>Pokedex</h1>
            <Pagination
            page={1}
            totalPages={100}
            onLeftClick={console.log}
            onRIghtClick={console.log}
            />
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