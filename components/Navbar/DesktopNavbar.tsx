'use client'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';    
import Link from 'next/link';
import './DesktopNavbar.css'
import { AlignJustify } from 'lucide-react';

function DesktopNavbar() {
  return (
   <>
     <nav className="navbar">
         <div className="logo">
            <Image
                src="/logo.png"
                alt="Bakery Logo"
                width={200}
                height={100}
            />
        </div>

        <div className="nav-links">
            <Link href="/">HOME</Link>
            <Link href="/menu">MENU</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/news">NEWS</Link>
            <Link href="/faq">FAQs</Link>
        </div>

        <div className="social-icons">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={26} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={26} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={26} />
            </Link>
        </div>

        <div className='mobile-menu'>
            <AlignJustify size={30} className='mobile-menu-icon' />
        </div>

        
    </nav>



    </>
  );
}

export default DesktopNavbar;
