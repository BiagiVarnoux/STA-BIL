const timeline = [
  {
    year: '1932',
    title: 'Nace Gold Eagle Co.',
    desc: 'Armin Hirsch funda la compañía en Chicago, Illinois, con una visión clara: crear productos que protejan lo que más le importa a la gente.',
  },
  {
    year: '1958',
    title: 'Nace STA-BIL®',
    desc: 'Se lanza el primer estabilizador de combustible de la historia. Una fórmula patentada que revolucionaría el mantenimiento automotriz en todo el mundo.',
  },
  {
    year: 'Hoy',
    title: 'Llega a Bolivia',
    desc: 'La misma fórmula #1 de EE.UU. ahora disponible en todo el país. Distribuidor oficial con entrega a domicilio en La Paz y envíos nacionales.',
  },
];

const pillars = [
  { icon: '🔬', label: 'Fórmulas patentadas' },
  { icon: '🧪', label: 'Pruebas de laboratorio independientes' },
  { icon: '🏆', label: '#1 estabilizador en EE.UU.' },
  { icon: '🛡️', label: 'Garantía incondicional de devolución' },
];

export default function Heritage() {
  return (
    <section className="py-20 px-4 bg-[#F8F8F8] border-y border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left — timeline */}
        <div>
          <p className="text-[#C8281E] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Nuestra historia
          </p>
          <h2
            className="font-black uppercase text-[#111111] leading-tight mb-10"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Más de 90 años<br />protegiendo motores.
          </h2>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-5">
                {/* Timeline spine */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#C8281E] flex items-center justify-center shadow-md shadow-red-200">
                    <span className="text-white text-[11px] font-black leading-tight text-center">
                      {item.year}
                    </span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 min-h-[3rem]" />
                  )}
                </div>
                {/* Text */}
                <div className="pb-10">
                  <h3 className="font-bold text-[#111111] text-base mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — mission card */}
        <div className="lg:sticky lg:top-24">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 shadow-sm">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-5">
              Misión — Gold Eagle Co.
            </p>
            <blockquote
              className="font-bold text-[#111111] leading-snug mb-8"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)' }}
            >
              "Dedicados a proteger y conservar lo que más te importa."
            </blockquote>

            <div className="h-px bg-gray-200 mb-8" />

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <span className="text-sm text-gray-600 leading-snug">{p.label}</span>
                </div>
              ))}
            </div>

            {/* Bolivia badge */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-3">
              <span className="text-2xl">🇧🇴</span>
              <div>
                <p className="text-[#111111] text-sm font-semibold">Distribuidor Oficial Bolivia</p>
                <p className="text-gray-400 text-xs">Envíos a todo el país desde La Paz</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
