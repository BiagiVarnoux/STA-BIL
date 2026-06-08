'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppDirectURL } from '@/lib/whatsapp';

export default function Hero() {
  const waUrl = buildWhatsAppDirectURL();

  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex flex-col items-center justify-center">
      {/* Top red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8281E]" />

      {/* Faded watermark — very subtle on white */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-black uppercase tracking-tighter whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 22vw, 24rem)',
            color: 'rgba(200,40,30,0.04)',
            lineHeight: 1,
          }}
        >
          STA-BIL
        </span>
      </div>

      {/* Left vertical red slash */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C8281E] opacity-80"
        aria-hidden="true"
      />

      {/* Soft radial highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(200,40,30,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">

        {/* Heritage badge */}
        <div className="flex items-center gap-3">
          <span className="block w-10 h-px bg-[#C8281E]" />
          <span
            className="text-[#C8281E] font-bold uppercase tracking-[0.35em]"
            style={{ fontSize: '11px' }}
          >
            Gold Eagle Co. · Chicago · Est. 1932
          </span>
          <span className="block w-10 h-px bg-[#C8281E]" />
        </div>

        {/* Brand logo */}
        <div className="bg-[#111111] rounded-xl px-6 py-3 inline-block">
          <Image
            src="/STA-BIL LOGO.png"
            alt="STA-BIL"
            width={200}
            height={68}
            className="object-contain"
            priority
          />
        </div>

        {/* Mission headline */}
        <h1
          className="font-black uppercase leading-none tracking-tight text-[#111111]"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)' }}
        >
          Dedicados a proteger<br />
          <span className="text-[#C8281E]">lo que más te importa.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
          La medicina preventiva de tu motor.&nbsp;
          El estabilizador de combustible{' '}
          <span className="text-[#111111] font-semibold">#1 en EE.UU.</span>{' '}
          durante más de 60 años. Ahora en Bolivia.
        </p>

        {/* Product image */}
        <div className="relative w-64 sm:w-80 aspect-[4/3] mt-2">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(200,40,30,0.10) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
            aria-hidden="true"
          />
          <Image
            src="/22214_HERO_750x500-1.jpg"
            alt="STA-BIL Fuel Stabilizer — el #1 de EE.UU."
            fill
            className="object-contain drop-shadow-lg"
            sizes="(max-width: 640px) 256px, 320px"
          />
          {/* "Made in USA" badge */}
          <div className="absolute -top-3 -right-3 bg-[#C8281E] text-white text-[9px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider shadow-lg">
            Made in USA
          </div>
        </div>

        {/* Stats row */}
        <div className="w-full max-w-xl grid grid-cols-4 divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-2">
          {[
            { value: '1932', label: 'Fundación' },
            { value: '#1',   label: 'EE.UU.' },
            { value: '60+',  label: 'Años' },
            { value: '22',   label: 'Productos' },
          ].map((s) => (
            <div key={s.label} className="py-4 sm:py-5 text-center bg-white">
              <p className="font-black text-xl sm:text-2xl text-[#C8281E]">{s.value}</p>
              <p
                className="text-gray-400 uppercase tracking-widest mt-1"
                style={{ fontSize: '9px' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="/catalogo"
            className="group inline-flex items-center gap-3 bg-[#C8281E] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#A01F17] transition-all text-sm uppercase tracking-widest shadow-md shadow-red-200"
          >
            Ver Catálogo Completo
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gray-300 text-gray-600 font-semibold px-8 py-4 rounded-lg hover:border-[#25D366] hover:text-[#25D366] transition-all text-sm uppercase tracking-widest"
          >
            <MessageCircle size={15} />
            Consultar por WhatsApp
          </a>
        </div>

        {/* Bolivia distributor label */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xl">🇧🇴</span>
          <span className="text-gray-400 uppercase tracking-widest" style={{ fontSize: '11px' }}>
            Distribuidor Oficial en Bolivia
          </span>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to top, #FFFFFF, transparent)' }}
      />
    </section>
  );
}
