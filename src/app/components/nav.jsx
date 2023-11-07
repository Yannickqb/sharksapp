import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '../../../public/background.png';
import Background2Image from '../../../public/background2.png';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const images = [BackgroundImage, Background2Image];
    setRandomImage(images[Math.floor(Math.random() * images.length)]);

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 50;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <Image src={"/SharksLogo.png"} alt="Sharks Logo" width={150} height={50} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <span className="text-5xl font-bold" style={{ color: '#fdd816' }}>SHARKS</span>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/" className="text-xl" style={{ color: '#fdd816' }}>Home</Link></li>
          <li><Link href="/news" className="text-xl" style={{ color: '#fdd816' }}>News</Link></li>
          <li><Link href="/team" className="text-xl" style={{ color: '#fdd816' }}>Teams</Link></li>
          <li><Link href="/contactr" className="text-xl" style={{ color: '#fdd816' }}>Teams</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
