import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import Actions from '../Actions/Actions';
import myLogo from '../../assets/logo.png';
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="logo-container">
        <a href="../">
          <img src={myLogo} alt="ESN Center Logo" className="logo-img" />
        </a>
      </div>

      <button
        className="icon-btn menu-btn"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <SearchBar />
      <Actions />
    </header>
  );
}

export default Header;