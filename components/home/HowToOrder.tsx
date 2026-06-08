import { buildWhatsAppDirectURL } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Elige tu producto',
    desc: 'Navega nuestro catálogo y encuentra el aditivo STA-BIL que necesita tu motor.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Escríbenos por WhatsApp',
    desc: 'Envíanos el nombre del producto y la cantidad. Te respondemos de inmediato con precio y disponibilidad.',
    icon: '💬',
  },
  {
    num: '03',
    title: 'Recibe tu pedido',
    desc: 'Coordinamos entrega en La Paz o envío a tu ciudad en toda Bolivia.',
    icon: '📦',
  },
];

export default function HowToOrder() {
  const waUrl = buildWhatsAppDirectURL();

  return (
    <section id="como-pedir" className="py-20 px-4 bg-[#111111] border-t border-[#2A2A2A]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C8281E] text-sm font-bold uppercase tracking-widest mb-3">Simple y rápido</p>
          <h2 className="font-black tracking-tight font-black text-4xl md:text-5xl uppercase text-white">
            ¿Cómo hacer tu pedido?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col items-center text-center gap-4">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px bg-[#2A2A2A]" />
              )}
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-[#C8281E]/10 border border-[#C8281E]/30 flex items-center justify-center text-3xl">
                {s.icon}
              </div>
              {/* Number */}
              <p className="font-black tracking-tight font-black text-5xl text-[#2A2A2A] absolute -top-2 -left-2">
                {s.num}
              </p>
              <h3 className="font-black tracking-tight font-bold text-xl uppercase text-white">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-green-900/20"
          >
            <MessageCircle size={22} />
            Hacer mi pedido por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
