import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'APM',
      links: [
        { text: 'builder', href: '/builder' },
        { text: 'keycaps', href: '/parts/keycaps' },
        { text: 'switches', href: '/parts/switches' },
        { text: 'kits', href: '/parts/kits' }
      ]
    },
    {
      title: 'Guides',
      links: [
        { text: 'introduction', href: '/guides/intro' },
        { text: 'keycaps', href: '/guides/keycaps' },
        { text: 'switches', href: '/guides/switches' },
        { text: 'sizes', href: '/guides/sizes' }
      ]
    },
    {
      title: 'About',
      links: [
        { text: 'contact', href: '/about' },
        { text: 'about us', href: '/about' }
      ]
    },
    {
      title: 'Developers',
      links: [
        {
          text: 'documentation',
          href: 'https://docs.google.com/document/d/138P1JU1TD8zh4MdE2r6CVwysE8JlBxd8_TpU8FN0FjU/edit?usp=sharing'
        },
        { text: 'github', href: 'https://github.com/orbital-apm' },
        { text: 'terms of service', href: '/' }
      ]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {footerSections.map((section, index) => (
          <div key={index} className={styles.footerSection}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.footerBottom}>
        <p>© Copyright 2024, All Rights Reserved</p>
        <Link href='https://www.canva.com/design/DAGEuRlG9bs/Vyhxt2OsP7q0hLPlrFtEwg/edit'>Project Poster</Link>
      </div>
    </footer>
  );
};

export default Footer;
