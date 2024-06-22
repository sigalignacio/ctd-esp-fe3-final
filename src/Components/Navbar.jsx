import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'; 
import styles from '../Styles/Navbar.module.css'; // Corrige la ruta de importación

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      <Link to ="detail/:id"></Link>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </nav>
  );
};

export default Navbar;
