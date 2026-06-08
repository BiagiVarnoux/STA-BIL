import Link from 'next/link';
import Image from 'next/image';

const equipment = [
  {
    label: 'Auto & Moto',
    desc: 'Protege el combustible durante almacenamiento prolongado. Hasta 24 meses de combustible fresco y motor listo.',
    image: '/22214_HERO_750x500-1.jpg',
    href: '/catalogo?categoria=Gasolina',
    count: '8',
    color: '#C8281E',
    bgLight: '#FEF2F2',
  },
  {
    label: 'Motor Diésel',
    desc: 'Formulaciones específicas para motores diésel en cualquier clima. Máxima protección y rendimiento.',
    image: '/15226-stabil-all-season-diesel-20-enhanced-750x500-min-600x400.png',
    href: '/catalogo?categoria=Diesel',
    count: '5',
    color: '#374151',
    bgLight: '#F9FAFB',
  },
  {
    label: 'Embarcación Marina',
    desc: 'Tecnología 360° para motores fuera de borda. Protección total contra corrosión, agua y humedad.',
    image: '/22240_HERO_750x500.jpg',
    href: '/catalogo?categoria=Marino',
    count: '4',
    color: '#1D4ED8',
    bgLight: '#EFF6FF',
  },
  {
    label: 'Equipos & Jardín',
    desc: 'Generadores, cortadoras de césped y motosierras. Mantén tus equipos listos para cuando los necesites.',
    image: '/STABIL-Small-Engine-Pro-Hero-Thumb_updated_750x500-600x400.jpg',
    href: '/catalogo?categoria=Exterior',
    count: '5',
    color: '#15803D',
    bgLight: '#F0FDF4',
  },
];

export default function EquipmentSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C8281E] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Encuentra tu producto
          </p>
          <h2
            className="font-black uppercase text-[#111111] leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            ¿Qué necesitas proteger?
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            STA-BIL tiene una fórmula específica para cada tipo de motor y equipo.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {equipment.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image area */}
              <div
                className="relative h-44 overflow-hidden"
                style={{ backgroundColor: item.bgLight }}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.color }}
                />
              </div>

              {/* Text content */}
              <div className="p-5">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-2"
                  style={{ color: item.color }}
                >
                  {item.count} productos
                </p>
                <h3 className="font-black text-lg uppercase text-[#111111] leading-tight mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {item.desc}
                </p>
                <div
                  className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: item.color }}
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
