import React, { useState } from "react";
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  const [isActive, setisActive] = useState(true);

  const changeClass = () => {
    setisActive(!isActive)
  }
  

  return <header className={styles.main}>
      <div className={isActive ? `${styles.item} ${styles.active}`: styles.item}>
        <Link to='/' className={styles.button} onClick={changeClass}>Все котики</Link>
      </div>
      <div className={isActive ? styles.item : `${styles.item} ${styles.active}`}>
        <Link to='/favourites' className={styles.button} onClick={changeClass}>Любимые котики</Link>
      </div>
  </header>;
};

export default Header;
