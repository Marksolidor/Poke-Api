import React from "react";
const {useState} = React;

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const searching = (e) => {
        console.log(e.target.value);
        setSearch (e.target.value);
    }
    return (
<>
<div>
    <input  
    placeholder="Buscar pokemon"
    onChange={searching}/>
</div>
<div>
    {search}
</div>
</>
    );
}

export default SearchBar