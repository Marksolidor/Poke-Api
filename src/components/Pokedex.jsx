import React from "react";

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
                        <div>{pokemon.name}</div>
                    )
                }
                
                )}
            </div>
        </div>
    );
};
export default Pokedex