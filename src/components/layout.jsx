
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='body'>
      <header>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <img className="logofooter"src='./assets/logo/logo-Footer.png'alt="logo footer de kasa"/>
        <p className='footerletter'>© 2020 Kasa. All rights reserved</p>
     
      </footer> 
    </div>
  )
};

export default Layout;
