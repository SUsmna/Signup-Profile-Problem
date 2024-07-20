import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";


const Header = () => {
  return (
    <div>
       <header>
      <h1 >Header</h1>
      <nav >
        <Link to="/">Signup</Link>
        <Link to="/profile" style={{ marginLeft: '1.0rem' }} >Profile</Link>  
      </nav>
    </header>
    <hr width="100%"></hr>
    </div>
   
  
  );
};

export default Header;