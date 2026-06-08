'use client';

import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppDirectURL } from '@/lib/whatsapp';
import { MessageCircle, ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  const waUrl = buildWhatsAppDirectURL();

  return (
    <section className="relative overflow-hidden bg-[#0D0D0D]">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C8281E 0px,
            #C8281E 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      {/* Red accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8281E]" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C8281E]/10 border border-[#C8281E]/30 rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C8281E] animate-pulse" />
            <span className="text-[#C8281E] text-xs font-bold uppercase tracking-widest">
              Distribuidor Oficial Bolivia
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-black tracking-tight font-black text-5xl sm:text-6xl lg:text-7xl leading-none uppercase text-white"
          >
            La medicina preventiva
            <span className="text-[#C8281E]"> de tu motor</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            STA-BIL® — el estabilizador de combustible <strong className="text-white">#1 en EE.UU.</strong> durante más de 60 años.
            Protege tu motor, mantiene el combustible fresco y previene averías.
          </p>

          {/* Stats */}
          <div className="flex gap-8 py-4 border-y border-[#2A2A2A]">
            <div>
              <p className="font-black tracking-tight font-black text-3xl text-[#C8281E]">60+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Años en el mercado</p>
            </div>
            <div>
              <p className="font-black tracking-tight font-black text-3xl text-[#C8281E]">#1</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">EE.UU.</p>
            </div>
            <div>
              <p className="font-black tracking-tight font-black text-3xl text-[#C8281E]">24</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Meses de protección</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 bg-[#C8281E] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#A01F17] transition-colors text-base"
            >
              Ver todos los productos
              <ChevronRight size={18} />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#25D366] text-[#25D366] font-bold px-8 py-4 rounded-lg hover:bg-[#25D366]/10 transition-colors text-base"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Product image */}
        <div className="relative flex items-center justify-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-[#C8281E]/10 rounded-full blur-3xl scale-75" />
          <div className="relative w-full max-w-md aspect-[4/3]">
            <Image
              src="/22214_HERO_750x500-1.jpg"
              alt="STA-BIL Fuel Stabilizer"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute top-4 right-4 bg-[#C8281E] text-white text-xs font-black px-3 py-2 rounded-lg shadow-lg uppercase tracking-wide">
            Made in USA
          </div>
        </div>
      </div>
    </section>
  );
}
