import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
// @ts-ignore
import Logo from "/home/nishant/LOCAL_DISK_D/GSoC/talawa/switchmap-ng-poller/docs/static/img/favicon_palisadoes.ico";
import "../../css/custom.css";
// @ts-ignore
import github from "../../../static/img/github.png";
// @ts-ignore
import youtube from "../../../static/img/youtube.png";
// @ts-ignore
import sun from "../../../static/img/sun.png";
import MobileMenu from '../MobileMenu/MobileMenu';

type NavLink = {
  path: string;
  label: string;
};

type IconLink = {
  href: string;
  src: string;
  alt: string;
};

const navLinks: NavLink[] = [
  { path: "/", label: "General" },
  { path: "", label: "Web Guide" },
  { path: "", label: "Poller Guide" },
  { path: "", label: "API Guide" },
];

const iconLinks: IconLink[] = [
  { href: "https://https://github.com/PalisadoesFoundation.com", src: github, alt: "GitHub" },
  { href: "https://www.youtube.com/@PalisadoesOrganization", src: youtube, alt: "YouTube" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__items}>
          <div className={styles.logo}>
            <button className={styles.mobileMenu} aria-label="Open Menu" onClick={toggleMobileMenu}>
              ☰
            </button>
            <img src={Logo} alt="Switchmap-NG Logo" />
            <Link to="/">Switchmap-NG</Link>
          </div>
          <ul className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.icons}>
          {iconLinks.map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
          <a href="#" onClick={() => console.log('Toggle theme')}>
            <img src={sun} alt="Toggle Theme" />
          </a>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Navbar;
