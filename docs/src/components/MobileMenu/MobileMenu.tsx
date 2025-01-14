import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';
import { Github, Youtube } from 'lucide-react';

const Logo = require('@site/static/img/favicon_palisadoes.ico').default;

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

type NavLink = {
  path: string;
  label: string;
};

type SocialLink = {
  href: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const navLinks: NavLink[] = [
  { path: "/", label: "GENERAL" },
  { path: "/web-guide", label: "WEB GUIDE" },
  { path: "/poller-guide", label: "POLLER GUIDE" },
  { path: "/api-guide", label: "API GUIDE" },
];

const socialLinks: SocialLink[] = [
  { href: "https://github.com/PalisadoesFoundation", Icon: Github },
  { href: "https://youtube.com/@PalisadoesOrganization", Icon: Youtube },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Use effect to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 996) {
        onClose(); // Close the menu if screen size exceeds 996px
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="Switchmap-NG" className={styles.logoImage} />
          <span className={styles.logoText}>Switchmap-NG</span>
        </div>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close Menu">
          ×
        </button>
      </div>

      <div className={styles.NavContent}>
        <nav className={styles.navigation}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={styles.navLink}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.socialLinks}>
          {socialLinks.map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
