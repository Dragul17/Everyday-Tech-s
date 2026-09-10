"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MonitorSmartphone, Search } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <MonitorSmartphone size={24} color="var(--primary-color)" />
          <span>EverydayTech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/search" aria-label="Search"><Search size={20} style={{ display: 'inline', verticalAlign: 'middle', marginTop: '-2px' }} /></Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/categories" onClick={toggleMenu}>Categories</Link>
            <Link href="/search" onClick={toggleMenu}>Search</Link>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
