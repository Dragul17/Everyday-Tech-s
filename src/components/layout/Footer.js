import Link from 'next/link';
import { MonitorSmartphone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <h3><MonitorSmartphone size={24} /> EverydayTech</h3>
          <p>Practical guides and recommendations for smarter everyday tech choices. We help you build the perfect setup.</p>
        </div>
        
        <div className={styles.links}>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/categories">Categories</Link></li>
          </ul>
        </div>
        
        <div className={styles.links}>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </div>
      
      <div className={`container`}>
        <div className={styles.disclosure}>
          <strong>Affiliate Disclosure</strong>
          As an Amazon Associate I earn from qualifying purchases. This means that if you click on a product link and make a purchase, we may earn a small commission at no extra cost to you. Our recommendations are always based on independent research and editorial integrity.
        </div>
      </div>
      
      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} EverydayTech. All rights reserved.</p>
      </div>
    </footer>
  );
}
