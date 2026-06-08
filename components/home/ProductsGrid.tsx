import type { ProductWithImages } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';

const CATEGORIES = [
  { key: 'Gasolina', label: 'Gasolina & Almacenamiento', color: '#C8281E', icon: '⛽' },
  { key: 'Diesel',   label: 'Diésel',                   color: '#4B5563', icon: '🛢️' },
  { key: 'Marino',   label: 'Marino',                   color: '#1D4ED8', icon: '⚓' },
  { key: 'Exterior', label: 'Exterior & Protección',    color: '#15803D', icon: '🛡️' },
];

interface Props {
  products: ProductWithImages[];
}

export default function ProductsGrid({ products }: Props) {
  const grouped = CATEGORIES.map((cat) => ({
    ...cat,
    items: products.filter((p) => p.labelType === cat.key),
  })).filter((cat) => cat.items.length > 0);

  if (products.length === 0) {
    return (
      <section className="py-20 px-4 text-center">
        <p className="text-gray-500">Cargando productos…</p>
      </section>
    );
  }

  return (
    <section id="categorias" className="py-16 px-4 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto space-y-16">
        {grouped.map((cat) => (
          <div key={cat.key}>
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="flex items-center gap-3 px-5 py-2.5 rounded-lg"
                style={{ backgroundColor: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
              >
                <span className="text-xl">{cat.icon}</span>
                <h2
                  className="font-black tracking-tight font-black text-2xl uppercase tracking-wide"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h2>
              </div>
              <div className="flex-1 h-px bg-[#2A2A2A]" />
              <Link
                href={`/catalogo?categoria=${cat.key}`}
                className="text-sm text-gray-500 hover:text-white transition-colors whitespace-nowrap"
              >
                Ver todos →
              </Link>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.items.slice(0, 8).map((p) => (
                <ProductCard key={p.id} product={p} categoryColor={cat.color} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 bg-[#C8281E] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#A01F17] transition-colors text-lg"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
