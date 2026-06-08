import { buildWhatsAppDirectURL } from '@/lib/whatsapp';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export default function GuaranteeSection() {
  const waUrl = buildWhatsAppDirectURL();

  return (
    <section className="relative overflow-hidden bg-[#C8281E] py-20 px-4">
      {/* Faded watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <ShieldCheck
          size={600}
          strokeWidth={0.3}
          className="text-white opacity-[0.04]"
        />
      </div>

      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #fff 0px, #fff 1px,
            transparent 1px, transparent 30px
          )`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-white/60 text-xs font-bold uppercase tracking-[0.35em] mb-4">
          Incluido en cada producto STA-BIL
        </p>
        <h2
          className="font-black uppercase text-white leading-none mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          Garantía<br />Incondicional
        </h2>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Si no estás 100% satisfecho con tu producto STA-BIL, te devolvemos tu dinero.{' '}
          <strong className="text-white">Sin preguntas. Sin demoras.</strong>{' '}
          Así de seguros estamos de nuestra fórmula.
        </p>

        {/* Pillars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {[
            'Fórmulas probadas en laboratorios independientes',
            'Más de 60 años en el mercado',
            '100% satisfacción o te devolvemos tu dinero',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-white/70 flex-shrink-0" />
              <span className="text-white/80 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#C8281E] font-black px-10 py-5 rounded-xl text-base sm:text-lg hover:bg-gray-100 transition-colors uppercase tracking-widest shadow-2xl shadow-red-900/40"
        >
          <MessageCircle size={20} />
          Hacer mi pedido por WhatsApp
        </a>
      </div>
    </section>
  );
}
