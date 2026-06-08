import { buildWhatsAppDirectURL } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Explora el catálogo',
    desc: 'Navega por categoría o tipo de equipo y encuentra el tratamiento STA-BIL exacto para tu motor.',
    icon: '🔍',
    href: '/catalogo',
    cta: 'Ver catálogo',
  },
  {
    num: '02',
    title: 'Escríbenos por WhatsApp',
    desc: 'Dinos el producto y la cantidad. Te respondemos de inmediato con precio, disponibilidad y coordenadas.',
    icon: '💬',
    href: null,
    cta: null,
  },
  {
    num: '03',
    title: 'Recibe tu pedido',
    desc: 'Entrega a domicilio en La Paz o envío a cualquier ciudad de Bolivia a través de encomienda.',
    icon: '📦',
    href: null,
    cta: null,
  },
];

export default function HowToOrder() {
  const waUrl = buildWhatsAppDirectURL();

  return (
    <section id="como-pedir" className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C8281E] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Simple y rápido
          </p>
          <h2
            className="font-black uppercase text-[#111111] leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            ¿Cómo hacer tu pedido?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col gap-5">
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-px bg-gray-200" />
              )}

              {/* Icon + step number */}
              <div className="relative w-16 h-16">
                <div className="w-16 h-16 rounded-full bg-[#F8F8F8] border border-gray-200 flex items-center justify-center text-2xl shadow-sm">
                  {s.icon}
                </div>
                <span className="absolute -top-2 -right-2 font-black text-[10px] text-white bg-[#C8281E] rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-black text-lg uppercase text-[#111111]">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>

              {s.href && (
                <Link
                  href={s.href}
                  className="text-[#C8281E] text-xs font-bold uppercase tracking-widest hover:underline w-fit"
                >
                  {s.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-md shadow-green-200 uppercase tracking-widest"
          >
            <MessageCircle size={20} />
            Hacer mi pedido por WhatsApp
          </a>
          <p className="text-gray-400 uppercase tracking-widest" style={{ fontSize: '11px' }}>
            Respuesta inmediata · Lunes a Sábado
          </p>
        </div>

      </div>
    </section>
  );
}
