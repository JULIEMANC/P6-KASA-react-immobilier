
import React from 'react';
import {Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className='body'>
      <header>
      <img className="logoheader"src='./assets/logo/LOGO.png'alt="logo header"/>
      <nav>
        <Link className='navlink' to="/">Accueil</Link>
        <Link className='navlink'to="/about">A Propos</Link>
      </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <img className="logofooter"src='./assets/logo/logo-footer.png'alt="logo footer de kasa"/>
        <p className='footerletter'>© 2020 Kasa. All rights reserved</p>
     
      </footer> 
    </div>
  )
};

export default Layout;
