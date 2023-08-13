import { useState } from 'react';
import Navbar from './components/Navbar';
import Events from './components/Events';
import './App.css'

function App() {
  const [searchTerm, setSeacrhTerm] = useState('');

  const handleNavbarSearch = (term) => {
    setSeacrhTerm(term);
  };

  console.log(searchTerm, 10);
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  )
}

export default App
