import { getAllProducts } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import { buildWhatsAppDirectURL } from '@/lib/whatsapp';
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Catálogo — STA-BIL Bolivia',
  description: 'Catálogo completo de productos STA-BIL en Bolivia. Estabilizadores de combustible, aditivos para gasolina, diésel, marino y más. Distribuidor oficial.',
};

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

function getParam(v: string | string[] | undefined): string {
  return typeof v === 'string' ? v.trim() : '';
}

const CATEGORIES = [
  { key: 'Gasolina', label: 'Gasolina', color: '#C8281E' },
  { key: 'Diesel',   label: 'Diésel',   color: '#374151' },
  { key: 'Marino',   label: 'Marino',   color: '#1D4ED8' },
  { key: 'Exterior', label: 'Exterior', color: '#15803D' },
];

export default async function CatalogoPage({ searchParams }: Props) {
  const params = await searchParams;
  const q         = getParam(params.q).toLowerCase();
  const categoria = getParam(params.categoria);

  const allProducts = await getAllProducts();

  const products = allProducts.filter((p) => {
    if (categoria && p.labelType !== categoria) return false;
    if (q) {
      return (
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.labelType.toLowerCase().includes(q) ||
        p.mainUse.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const activeCategory = CATEGORIES.find((c) => c.key === categoria);
  const waUrl = buildWhatsAppDirectURL();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] text-white py-14 px-4 relative overflow-hidden">
        {/* Red accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8281E]" />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C8281E] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Distribuidor Oficial Bolivia
          </p>
          <h1 className="font-black text-4xl sm:text-5xl uppercase mb-3">
            Catálogo STA-BIL®
          </h1>
          <p className="text-gray-400 text-lg">
            22 productos para gasolina, diésel, marino y equipos exteriores
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 px-4 py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto pb-1">
          <Link
            href="/catalogo"
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors ${
              !categoria
                ? 'bg-[#111111] text-white'
                : 'border border-gray-300 text-gray-500 hover:border-[#111111] hover:text-[#111111]'
            }`}
          >
            Todos
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/catalogo?categoria=${cat.key}`}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all"
              style={
                categoria === cat.key
                  ? { backgroundColor: cat.color, color: '#fff' }
                  : { border: `1px solid #E5E7EB`, color: '#6B7280' }
              }
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-14 px-4 bg-[#F8F8F8] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {/* Active filter label */}
          {(categoria || q) && (
            <div className="flex items-center gap-3 mb-8">
              <p className="text-sm text-gray-500">
                {products.length} producto{products.length !== 1 ? 's' : ''}
                {activeCategory && (
                  <span
                    className="ml-2 font-semibold"
                    style={{ color: activeCategory.color }}
                  >
                    · {activeCategory.label}
                  </span>
                )}
                {q && <span className="ml-2 font-semibold text-[#111111]">· "{q}"</span>}
              </p>
              <Link
                href="/catalogo"
                className="text-xs text-gray-400 hover:text-[#C8281E] transition-colors underline"
              >
                Limpiar filtro
              </Link>
            </div>
          )}

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  categoryColor={
                    CATEGORIES.find((c) => c.key === p.labelType)?.color ?? '#C8281E'
                  }
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-2xl text-gray-300 mb-2">🔍</p>
              <p className="text-lg font-medium text-gray-500 mb-1">
                No encontramos productos.
              </p>
              <Link
                href="/catalogo"
                className="text-sm text-[#C8281E] underline"
              >
                Ver todo el catálogo
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-white py-14 px-4 text-center border-t border-gray-200">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-[#111111] mb-2">
            ¿No sabes qué producto necesitas?
          </h2>
          <p className="text-gray-500 mb-6">
            Cuéntanos qué tienes (auto, moto, generador…) y te recomendamos el STA-BIL correcto.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md shadow-green-200"
          >
            💬 Consultar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
