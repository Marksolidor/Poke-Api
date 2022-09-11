import React from "react";
const {useState} = React;

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const searching = (e) => {
        console.log(e.target.value);
        setSearch (e.target.value);
    }
    const findPoke = (e) => {
        console.log("Searching...")
    }
    
    return (
<>
<div>
    <input  
    placeholder="Buscar pokemon"
    onChange={searching}/>
</div>
<div>
    <button onClick={findPoke}> Buscar </button>
</div>
</>
    );
}

export default SearchBar