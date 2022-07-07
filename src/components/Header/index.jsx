import React from "react";
import styles from './Header.module.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return <div className={styles.main}>
    <div className={styles.item}>
      <Link to='/' className={styles.button}>Все котики</Link>
    </div>
    <div className={styles.item}>
      <Link to='/favourites' className={styles.button}>Любимые котики</Link>
    </div>
  </div>;
};

export default Header;
