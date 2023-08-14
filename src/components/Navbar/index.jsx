import { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState(''); 

    //Para exponer valores del descendiente hacia el padre
    useImperativeHandle(ref, () => ({
        search
    }));

    const handleInputchange = (event) => {
        setSearch(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(search);
        }
    };
    
    return (
        <div ref={ref} style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex',
        }}>
            <div style={{ flex: 1, display: 'flex' }}>
                <p style={{
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>Mi boletera</p>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <input
                    placeholder="Busca tu evento favorito"
                    onChange={handleInputchange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        fontSize: 16,
                        padding: '6px 12px',
                        borderRadius: 4,
                        width: 200,
                    }}
                />
                <Link to="/profile/my-info" style={{
                    marginLeft: 24,
                    color: '#000',
                    textDecoration: 'none'
                }}>Mi perfil</Link>
            </div>
        </div>
    );
});

export default Navbar;