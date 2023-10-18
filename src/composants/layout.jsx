
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Mon Application</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2023 Mon Application</p>
      </footer> 
    </div>
  )
};

export default Layout;
