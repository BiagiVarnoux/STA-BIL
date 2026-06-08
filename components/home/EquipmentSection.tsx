import Link from 'next/link';
import Image from 'next/image';

const equipment = [
  {
    label: 'Auto & Moto',
    desc: 'Protege el combustible durante almacenamiento prolongado. Hasta 24 meses de combustible fresco.',
    image: '/22214_HERO_750x500-1.jpg',
    href: '/catalogo?categoria=Gasolina',
    count: '8',
    accentColor: '#C8281E',
  },
  {
    label: 'Motor Diésel',
    desc: 'Formulaciones específicas para motores diésel en cualquier clima. Máxima protección y rendimiento.',
    image: '/15226-stabil-all-season-diesel-20-enhanced-750x500-min-600x400.png',
    href: '/catalogo?categoria=Diesel',
    count: '5',
    accentColor: '#4B5563',
  },
  {
    label: 'Embarcación Marina',
    desc: 'Tecnología 360° para motores marinos. Protección total contra corrosión, agua y humedad.',
    image: '/22240_HERO_750x500.jpg',
    href: '/catalogo?categoria=Marino',
    count: '4',
    accentColor: '#1D4ED8',
  },
  {
    label: 'Equipos & Jardín',
    desc: 'Generadores, cortadoras de césped y motosierras. Mantén tus equipos listos para usarse.',
    image: '/STABIL-Small-Engine-Pro-Hero-Thumb_updated_750x500-600x400.jpg',
    href: '/catalogo?categoria=Exterior',
    count: '5',
    accentColor: '#15803D',
  },
];

export default function EquipmentSection() {
  return (
    <section className="py-20 px-4 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C8281E] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Encuentra tu producto
          </p>
          <h2
            className="font-black uppercase text-white leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            ¿Qué necesitas proteger?
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            STA-BIL tiene una fórmula específica para cada tipo de motor y equipo.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {equipment.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative overflow-hidden rounded-xl border border-[#2A2A2A] hover:border-[#C8281E]/40 transition-all duration-300"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Background image */}
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.6) 50%, rgba(13,13,13,0.2) 100%)',
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: item.accentColor }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-2"
                  style={{ color: item.accentColor }}
                >
                  {item.count} productos
                </p>
                <h3 className="font-black text-lg sm:text-xl uppercase text-white leading-tight mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">
                  {item.desc}
                </p>
                <div
                  className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all"
                  style={{ color: item.accentColor }}
                >
                  Ver productos
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
