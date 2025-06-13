import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import CompanyLogo from '@assets/Logo.svg';

const linkClassName = ({ isActive }) => {
  return clsx('navigationLink', isActive && 'activeLink');
};

function MainNavigation() {
  return (
    <header className={s.headerSection}>
      <div className={s.headerContainer}>
        <img src={CompanyLogo} alt="Logo"></img>
        <nav className={s.navigationMenu}>
          <NavLink to="/" className={linkClassName}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={linkClassName}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;