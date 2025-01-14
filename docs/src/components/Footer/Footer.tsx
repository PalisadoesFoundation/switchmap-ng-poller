import React from 'react';
import styles from './Footer.module.css';
import { FaSlack, FaNewspaper, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

// Define a type for footer links
type FooterLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

// Define a type for footer sections
type FooterSection = {
  title: string;
  links: FooterLink[];
};

const Footer: React.FC = () => {
  // Define footer sections dynamically
  const footerSections: FooterSection[] = [
    {
      title: 'Community',
      links: [
        { label: 'Slack', href: 'https://app.slack.com/client/TSLB0UMJ5/CSWH4PN0M', icon: <FaSlack /> },
        { label: 'News', href: 'https://www.palisadoes.org/news/', icon: <FaNewspaper /> },
        { label: 'Contact Us', href: 'https://www.palisadoes.org/contact/', icon: <FaEnvelope /> },
      ],
    },
    {
      title: 'Social Media',
      links: [
        { label: 'Twitter', href: 'https://x.com/palisadoesorg?lang=en&mx=2', icon: <FaTwitter /> },
        { label: 'Facebook', href: 'https://www.facebook.com/palisadoesproject/', icon: <FaFacebook /> },
        { label: 'Instagram', href: 'https://www.instagram.com/palisadoes/?hl=en', icon: <FaInstagram /> },
      ],
    },
    {
      title: 'Development',
      links: [
        { label: 'GitHub', href: 'https://github.com/PalisadoesFoundation', icon: <FaGithub /> },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {footerSections.map((section, index) => (
          <div className={styles.section} key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <span className={styles.icon}>{link.icon}</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.copyright}>
        Copyright © 2025 The Palisadoes Foundation, LLC. Built with Docusaurus.
      </div>
    </footer>
  );
};

export default Footer;
