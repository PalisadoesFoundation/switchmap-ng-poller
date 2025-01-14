import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import "../../css/custom.css";

const Logo = require('@site/static/img/favicon_palisadoes.ico').default;
const github = require('@site/static/img/github.png').default;
const youtube = require('@site/static/img/youtube.png').default;
const sun = require('@site/static/img/sun.png').default;

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
  { path: "https://docs.switchmap-ng.io/", label: "General" },
  { path: "https://docs-web.switchmap-ng.io/", label: "Web Guide" },
  { path: "https://docs-poller.switchmap-ng.io/", label: "Poller Guide" },
  { path: "https://docs-api.switchmap-ng.io/", label: "API Guide" },
];

const iconLinks: IconLink[] = [
  { href: "https://github.com/PalisadoesFoundation", src: github, alt: "GitHub"  },
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
          {/* <a href="#" onClick={() => console.log('Toggle theme')}>
            <img src={sun} alt="Tog" />
          </a> */}
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Navbar;
