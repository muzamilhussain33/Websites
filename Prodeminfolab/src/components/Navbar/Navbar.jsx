import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import styles from '../Navbar/Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className={styles.navbar}>
      
      <Link to='/home' className={styles.logo}>
        <img src={logo} alt="Logo" />
      </Link>

      {/* <div className={styles.menuIcon}>
        <IoMenu size={30} color="" />
      </div> */}
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.dropdown}>
            <div>Our work</div>
            <ul className={styles.dropdownMenu}>
              <li><Link to="/ourwork-mission">Mission</Link></li>
              <li><Link to="/ourwork-impact">Impact</Link></li>
            </ul>
          </li>
          <li className={styles.dropdown}>
            <div to="/">Our People</div>
            <ul className={styles.dropdownMenu}>
              <li><Link to="/ourpeople-founder">Founder</Link></li>
              <li><Link to="/ourpeople-board">Boards</Link></li>
              <li><Link to="/ourpeople-funder">Funders</Link></li>
            </ul>
          </li>
          <li><Link to="/ourprojects">Our Projects</Link></li>
          <li className={styles.dropdown}>
            <div to="/">Reporting Right</div>
            <ul className={`${styles.dropdownMenu} ${styles.reportRighting}`}>
              <li><Link to="/reportingright-about">About</Link></li>
              <li><Link to="/">Weekly issues</Link></li>
              <li><Link to="/subscribe">Subscribe</Link></li>
            </ul>
          </li>
          <li><Link to="/">Donate</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
