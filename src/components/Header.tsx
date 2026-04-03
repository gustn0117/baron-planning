'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: '바론플래닝' },
  { href: '/organization', label: '조직도' },
  { href: '/about', label: '회사소개' },
  { href: '/ci', label: 'CI' },
  { href: '/sales', label: '분양사업부' },
  { href: '/advertising', label: '광고사업부' },
  { href: '/portfolio', label: '사업실적' },
  { href: '/contact', label: '사업문의' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isDarkPage = ['/sales', '/advertising', '/portfolio'].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const headerClass = `header ${scrolled ? 'scrolled' : ''} ${
    (isHome || isDarkPage) && !scrolled ? 'white-mode' : ''
  }`;

  return (
    <header className={headerClass}>
      <div className="header-inner">
        <Link href="/" className="header-logo">
          <Image
            src={scrolled || (!isHome && !isDarkPage) ? '/images/logo/baron-logo.png' : '/images/logo/baron-logo-white.png'}
            alt="바론플래닝"
            width={180}
            height={50}
            priority
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
