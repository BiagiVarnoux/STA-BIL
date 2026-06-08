'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { buildWhatsAppDirectURL } from '@/lib/whatsapp';
import CartIcon from '@/components/cart/CartIcon';

const navLinks = [
  { href: '/catalogo',           label: 'Productos' },
  { href: '/categorias/auto-moto',  label: 'Auto & Moto' },
  { href: '/categorias/diesel',     label: 'Diésel' },
  { href: '/categorias/marina',     label: 'Marina' },
  { href: '/#como-pedir',        label: 'Cómo pedir' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b-2 border-[#C8281E] ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md shadow-black/5'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-[90px] h-[38px]">
            <Image
              src="/STA-BIL LOGO.png"
              alt="STA-BIL"
              fill
              className="object-contain"
              style={{ filter: 'brightness(0)' }}
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[10px] font-bold text-[#C8281E] uppercase tracking-widest">
              Bolivia
            </span>
            <span className="text-[10px] text-gray-400">Distribuidor Oficial</span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-[#C8281E] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppDirectURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <CartIcon />
          <button
            className="md:hidden p-2 text-gray-500 hover:text-[#111111] transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-black/30 flex-1" onClick={() => setMenuOpen(false)} />
          <div className="w-72 bg-white h-full flex flex-col p-6 shadow-2xl animate-slide-in-right border-l border-gray-200 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/STA-BIL LOGO.png"
                alt="STA-BIL"
                width={80}
                height={34}
                className="object-contain"
                style={{ filter: 'brightness(0)' }}
              />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar"
                className="text-gray-400 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-base font-medium text-gray-700 hover:text-[#C8281E] py-3 border-b border-gray-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <a
                href={buildWhatsAppDirectURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
