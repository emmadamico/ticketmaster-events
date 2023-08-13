import { useState } from "react";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState(''); 

    const handleInputchange = (event) => {
        setSearch(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(search);
        }
    };
    
    return (
        <div>
            <p>Navbar</p>
            <input 
                placeholder="Busco tu evento favorito" 
                onChange={handleInputchange}
                onKeyDown={handleInputKeyDown}
                value={search} 
            />
        </div>
    );
};

export default Navbar;