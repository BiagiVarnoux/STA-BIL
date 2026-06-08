const badges = [
  {
    icon: '🏆',
    title: '#1 en Estados Unidos',
    desc: 'El estabilizador más vendido de EE.UU. durante más de 60 años consecutivos.',
  },
  {
    icon: '🔬',
    title: 'Fórmula Patentada',
    desc: 'Con antioxidantes, anticorrosivos y detergentes diseñados científicamente.',
  },
  {
    icon: '🛡️',
    title: 'Garantía Incondicional',
    desc: 'Cada producto incluye garantía de devolución de dinero sin preguntas.',
  },
  {
    icon: '🇧🇴',
    title: 'Envíos a toda Bolivia',
    desc: 'Despachamos desde La Paz a cualquier ciudad del país.',
  },
];

export default function TrustBadges() {
  return (
    <section id="trust" className="bg-[#111111] border-y border-[#2A2A2A] py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map((b) => (
          <div key={b.title} className="flex flex-col items-center text-center gap-3">
            <span className="text-4xl">{b.icon}</span>
            <p className="font-black tracking-tight font-bold text-lg uppercase tracking-wide text-white">
              {b.title}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
