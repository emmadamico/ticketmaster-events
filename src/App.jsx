import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Events from './components/Events';
import SignupForm from './components/SignupForm';

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
      <SignupForm />
    </>
  )
}

export default App
