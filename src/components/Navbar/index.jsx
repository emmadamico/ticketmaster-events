import { useState } from "react";

const Navbar = () => {
    const [search, setSearch] = useState(''); 

    const handleInputchange = (event) => {
        setSearch(event.target.value);
    };
    
    return (
        <div>
            <p>Navbar</p>
            <input 
                placeholder="Busco tu evento favorito" 
                onChange={handleInputchange}
                value={search} 
            />
        </div>
    );
};

export default Navbar;