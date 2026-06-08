import type { ProductWithImages } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';

interface Props {
  products: ProductWithImages[];
}

export default function FeaturedProducts({ products }: Props) {
  if (products.length === 0) return null;

  const featured = products.slice(0, 4);

  return (
    <section className="py-20 px-4 bg-[#F8F8F8] border-y border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#C8281E] text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Lo más popular
            </p>
            <h2
              className="font-black uppercase text-[#111111] leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Productos Destacados
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="hidden sm:inline-flex items-center gap-2 text-gray-400 hover:text-[#C8281E] text-sm transition-colors uppercase tracking-wide font-medium"
          >
            Ver los 22 productos →
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              showBadge={i === 0}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 bg-[#C8281E] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#A01F17] transition-colors"
          >
            Ver catálogo completo
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="mt-12 text-center hidden sm:block">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-3 border border-gray-300 text-gray-500 hover:border-[#C8281E] hover:text-[#C8281E] font-semibold px-8 py-3 rounded-lg transition-all text-sm uppercase tracking-widest"
          >
            Ver los 22 productos del catálogo completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
