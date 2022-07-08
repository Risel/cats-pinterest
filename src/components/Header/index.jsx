import React, { useState } from "react";
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom'

const Header = () => {

  return <header className={styles.main}>
      <div className={styles.item}>
        <NavLink to='/' className={styles.button}>Все котики</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/favourites' className={styles.button}>Любимые котики</NavLink>
      </div>
  </header>;
};

export default Header;
