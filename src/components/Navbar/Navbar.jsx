import React from 'react';
import styles from "./Navbar.module.css";
import { useState } from 'react';
import { getImageUrl } from '../../utils';


function Navbar() {
  const[menuOpen, setMenuOpen] = useState(false);

  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">Porfolio</a>
    <div className={styles.menu}>
      <img className={styles.menuBtn} src={menuOpen? 
      getImageUrl("nav/close.png"):
      getImageUrl("nav/menu.png")} 
      alt="menu" 
      onClick={()=>setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=> setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  </nav>
  );
  
}

export default Navbar
