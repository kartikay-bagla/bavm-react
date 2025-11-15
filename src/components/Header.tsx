'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/company-profile', label: 'Company Profile' },
  { href: '/key-people', label: 'Key People' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/important-links', label: 'Important Links' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact-us', label: 'Contact Us' },
];

const LOGO = {
  src: '/images/bavm-logo-slow.gif',
  alt: 'BAVM Legal Logo',
};

const CTA_LINK = {
  href: '/online-consultation',
  label: 'Online Consultation',
};

const CONTACT = {
  email: {
    href: 'mailto:contact@bavm.legal',
    label: 'contact@bavm.legal',
  },
  phone: {
    href: 'tel:+911141775172',
    label: '+91 11 41775172',
  },
};

const DESKTOP_CONTACT_LINKS = [CONTACT.email, CONTACT.phone];

const MOBILE_CONTACT_LINKS = [CONTACT.phone, CONTACT.email];

const MOBILE_NAV_LINKS = [
  { ...CTA_LINK, variant: 'cta' as const },
  ...NAV_LINKS.map((link) => ({ ...link, variant: 'default' as const })),
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="hidden md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-8">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={LOGO.src}
                alt={LOGO.alt}
                width={200}
                height={70}
                className="h-auto w-[150px] lg:w-[200px]"
                sizes="(max-width: 1023px) 150px, 200px"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <div className="flex flex-wrap items-center justify-end gap-4 text-sm lg:text-base">
              <Link
                href={CTA_LINK.href}
                className="inline-flex items-center font-semibold text-black hover:scale-105 transition-transform duration-300"
              >
                {CTA_LINK.label}
              </Link>
              {DESKTOP_CONTACT_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex items-center text-primary hover:text-secondary"
                >
                  <i className={`fas ${href.startsWith('mailto:') ? 'fa-envelope-square' : 'fa-phone-alt'} mr-1`}></i>
                  {label}
                </a>
              ))}
            </div>
            <nav className="flex flex-wrap justify-end gap-6 text-sm lg:text-base">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative text-primary hover:text-secondary transition-all duration-300 ease-in-out hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:hidden">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src={LOGO.src}
                alt={LOGO.alt}
                width={220}
                height={80}
                className="h-auto w-[180px] sm:w-[220px]"
                sizes="(max-width: 767px) 180px, 220px"
                priority
              />
            </Link>
          </div>
          <div className="grid w-full grid-cols-2 gap-3 text-sm">
            {MOBILE_CONTACT_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-center text-primary hover:text-secondary"
              >
                <i className={`fas ${href.startsWith('mailto:') ? 'fa-envelope-square' : 'fa-phone-alt'} mr-1`}></i>
                {label}
              </a>
            ))}
          </div>
          <div>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex w-full items-center justify-center rounded border border-primary py-2 text-primary hover:bg-primary hover:text-white transition"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-links"
            >
              <span className="mr-2">Menu</span>
              <span className={`transform transition-transform ${menuOpen ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>
            {menuOpen && (
              <nav
                id="mobile-nav-links"
                className="mt-3 flex flex-col items-center space-y-2 text-sm"
              >
                {MOBILE_NAV_LINKS.map(({ href, label, variant }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block w-full text-center py-2 ${
                      variant === 'cta'
                        ? 'bg-secondary font-semibold text-black hover:bg-primary hover:text-white'
                        : 'text-primary hover:text-secondary'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
