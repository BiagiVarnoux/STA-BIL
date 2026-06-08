'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { buildWhatsAppDirectURL } from '@/lib/whatsapp';
import CartIcon from '@/components/cart/CartIcon';

const navLinks = [
  { href: '/catalogo', label: 'Productos' },
  { href: '/#categorias', label: 'Categorías' },
  { href: '/#como-pedir', label: 'Cómo pedir' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-sm shadow-lg shadow-black/50'
          : 'bg-[#0D0D0D]'
      } border-b border-[#2A2A2A]`}
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
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[10px] font-semibold text-[#C8281E] uppercase tracking-widest">Bolivia</span>
            <span className="text-[10px] text-gray-500">Distribuidor Oficial</span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
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
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
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
          <div className="bg-black/70 flex-1" onClick={() => setMenuOpen(false)} />
          <div className="w-72 bg-[#111111] h-full flex flex-col p-6 shadow-2xl animate-slide-in-right border-l border-[#2A2A2A] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <Image src="/STA-BIL LOGO.png" alt="STA-BIL" width={80} height={34} className="object-contain" />
              <button onClick={() => setMenuOpen(false)} aria-label="Cerrar" className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-base font-medium text-gray-300 hover:text-white py-3 border-b border-[#2A2A2A] transition-colors"
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
