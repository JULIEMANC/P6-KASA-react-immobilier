import React, { useState } from "react";
import { NavLink} from "react-router-dom";

const Layout = ({ children }) => {
  const [activeLink, setActiveLink] = useState(false);
  const toggleLink = () => {
    setActiveLink(!activeLink);
  };
  return (
    <div className="body">
      <header>
        <img
          className="logoheader"
          src="../assets/logo/LOGO.png"
          alt="logo header"
        />
        <nav>
          <ul>
            <li className={activeLink ? 'active' : ''}>
              <NavLink
                onClick={toggleLink}
                className="navlink"
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li className={activeLink ? 'active' : ''}>
              <NavLink
                onClick={toggleLink}
                className="navlink"
                to="/about"
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <img
          className="logofooter"
          src="../assets/logo/logo-footer.png"
          alt="logo footer de kasa"
        />
        <p className="footerletter">© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
