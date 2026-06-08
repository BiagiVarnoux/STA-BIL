import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import { buildWhatsAppDirectURL } from '@/lib/whatsapp';
import { ChevronRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

// ─── Category config ────────────────────────────────────────────────────────

const CATEGORIES = {
  'auto-moto': {
    slug:       'auto-moto',
    label:      'Auto & Moto',
    labelType:  'Gasolina',
    color:      '#C8281E',
    colorLight: '#FEF2F2',
    icon:       '🚗',
    headline:   'Protege tu auto o moto',
    tagline:    'El combustible fresco y el motor limpio empiezan con STA-BIL.',
    desc:       'Desde el almacenamiento de temporada hasta el uso diario, STA-BIL tiene la fórmula exacta para mantener tu gasolina estable y tu motor libre de depósitos por hasta 24 meses.',
    heroImage:  '/22214_HERO_750x500-1.jpg',
    features: [
      'Mantiene combustible fresco hasta 24 meses',
      'Previene la corrosión en carburador y líneas',
      'Ideal para almacenamiento de temporada',
      'Compatible con todos los motores de gasolina',
    ],
  },
  'diesel': {
    slug:       'diesel',
    label:      'Motor Diésel',
    labelType:  'Diesel',
    color:      '#374151',
    colorLight: '#F9FAFB',
    icon:       '🛢️',
    headline:   'Máximo rendimiento para tu diésel',
    tagline:    'Fórmulas especializadas para motores diésel en cualquier clima.',
    desc:       'Los motores diésel enfrentan retos únicos: gelificación en frío, acumulación de depósitos y baja lubricidad del combustible moderno. STA-BIL tiene tratamientos específicos para cada problema.',
    heroImage:  '/15226-stabil-all-season-diesel-20-enhanced-750x500-min-600x400.png',
    features: [
      'Previene gelificación en temperaturas bajas',
      'Limpia inyectores y sistema de combustible',
      'Mejora la lubricidad del diésel moderno',
      'Aumenta el número de cetano',
    ],
  },
  'marina': {
    slug:       'marina',
    label:      'Embarcación Marina',
    labelType:  'Marino',
    color:      '#1D4ED8',
    colorLight: '#EFF6FF',
    icon:       '⚓',
    headline:   'Protección 360° para tu embarcación',
    tagline:    'Tecnología marina especializada contra la corrosión y la humedad.',
    desc:       'Los motores marinos enfrentan el ambiente más agresivo: agua salada, humedad constante y almacenamiento prolongado entre temporadas. STA-BIL 360° Marine fue diseñado específicamente para estos desafíos.',
    heroImage:  '/22240_HERO_750x500.jpg',
    features: [
      'Protección 360° contra corrosión marina',
      'Combate el etanol en el combustible marino',
      'Ideal para almacenamiento entre temporadas',
      'Compatible con motores fuera de borda e inboard',
    ],
  },
  'equipos-jardin': {
    slug:       'equipos-jardin',
    label:      'Equipos & Jardín',
    labelType:  'Exterior',
    color:      '#15803D',
    colorLight: '#F0FDF4',
    icon:       '🌿',
    headline:   'Equipos listos cuando los necesitas',
    tagline:    'Generadores, cortadoras y motosierras siempre en condiciones.',
    desc:       'Los equipos de jardín y generadores pasan meses sin usarse. Ese período es el más dañino para el motor y el combustible. Con STA-BIL, arranca al primer intento cada temporada.',
    heroImage:  '/STABIL-Small-Engine-Pro-Hero-Thumb_updated_750x500-600x400.jpg',
    features: [
      'Mantiene el combustible estable en equipos guardados',
      'Protege carburadores de pequeños motores',
      'Para generadores, cortadoras, motosierras y más',
      'Arranque confiable después del almacenamiento',
    ],
  },
} as const;

type Slug = keyof typeof CATEGORIES;

// ─── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES[slug as Slug];
  if (!cat) return {};
  return {
    title: `${cat.label} — STA-BIL Bolivia`,
    description: cat.desc,
  };
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function CategoryPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const cat = CATEGORIES[slug as Slug];
  if (!cat) notFound();

  const products = await getProductsByCategory(cat.labelType);
  const waUrl = buildWhatsAppDirectURL();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#C8281E] transition-colors">Inicio</Link>
          <ChevronRight size={13} />
          <Link href="/catalogo" className="hover:text-[#C8281E] transition-colors">Catálogo</Link>
          <ChevronRight size={13} />
          <span className="font-medium" style={{ color: cat.color }}>{cat.label}</span>
        </div>
      </div>

      {/* Hero de categoría */}
      <section
        className="relative overflow-hidden py-16 px-4"
        style={{ backgroundColor: cat.colorLight, borderBottom: `3px solid ${cat.color}` }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{cat.icon}</span>
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: cat.color }}
              >
                STA-BIL® · {cat.label}
              </span>
            </div>

            <h1
              className="font-black uppercase text-[#111111] leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {cat.headline}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              {cat.desc}
            </p>

            {/* Features */}
            <ul className="space-y-2 mt-2">
              {cat.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span
                    className="mt-0.5 text-base flex-shrink-0"
                    style={{ color: cat.color }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wide"
              >
                💬 Consultar por WhatsApp
              </a>
              <span className="text-sm text-gray-400">
                {products.length} producto{products.length !== 1 ? 's' : ''} disponibles
              </span>
            </div>
          </div>

          {/* Right — product image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[4/3]">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${cat.color}20 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
                aria-hidden="true"
              />
              <Image
                src={cat.heroImage}
                alt={cat.label}
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
                style={{ color: cat.color }}
              >
                {products.length} producto{products.length !== 1 ? 's' : ''}
              </p>
              <h2 className="font-black text-2xl uppercase text-[#111111]">
                Productos para {cat.label}
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#C8281E] transition-colors"
            >
              Ver catálogo completo →
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  categoryColor={cat.color}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-gray-400 text-lg">Próximamente más productos en esta categoría.</p>
              <Link href="/catalogo" className="text-[#C8281E] text-sm mt-2 inline-block underline">
                Ver catálogo completo
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other categories */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-2xl uppercase text-[#111111] mb-8 text-center">
            Otras categorías
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.values(CATEGORIES)
              .filter((c) => c.slug !== cat.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/categorias/${other.slug}`}
                  className="group flex items-center gap-4 bg-[#F8F8F8] border border-gray-200 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-3xl">{other.icon}</span>
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: other.color }}
                    >
                      Ver productos
                    </p>
                    <p className="font-black text-sm uppercase text-[#111111]">{other.label}</p>
                  </div>
                  <span className="ml-auto text-gray-300 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#111111] text-white py-14 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-3">Estamos para ayudarte</p>
          <h2 className="font-black text-3xl uppercase mb-3">
            ¿Cuál STA-BIL necesitas?
          </h2>
          <p className="text-gray-400 mb-8">
            Cuéntanos tu motor o equipo y te recomendamos el producto exacto.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
          >
            💬 Consultar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
