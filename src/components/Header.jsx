import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import v from '../assets/logo2.jpg';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={v} alt="image" width="30" height="30" />
        <h4>BACHELORS</h4>
        <div className="elements">
          <Link to="/rooms">Rooms</Link>
          <Link to="/near-me">Near me</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/signup">SIGN UP</Link>
          <Link to="/signin">SIGN IN</Link>
        </div>
      </nav>
      <div className="hero-text">
        <h1>"A bachelor's life is a fine breakfast,<br /> a flat lunch, and a miserable dinner."</h1>
      </div>
    </header>
  );
}

export default Header;

