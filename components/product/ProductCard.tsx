import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import type { ProductWithImages } from '@/lib/products';
import { buildWhatsAppURL } from '@/lib/whatsapp';
import { formatBob } from '@/lib/utils';

interface Props {
  product: ProductWithImages;
  showBadge?: boolean;
  categoryColor?: string;
}

export default function ProductCard({ product, showBadge = false, categoryColor = '#C8281E' }: Props) {
  const waUrl = buildWhatsAppURL({ product: product.name, model: product.model, quantity: 1 });
  const cover = product.images[0]
    ? { src: product.images[0].url, alt: product.images[0].alt }
    : product.imageUrl
    ? { src: product.imageUrl, alt: product.name }
    : null;

  return (
    <div className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#3A3A3A] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 transition-all duration-200 flex flex-col">
      {/* Image area */}
      <div className="relative h-48 bg-[#111111]">
        {showBadge && (
          <span
            className="absolute top-3 left-3 z-10 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow"
            style={{ backgroundColor: categoryColor }}
          >
            Más vendido
          </span>
        )}

        <Link href={`/productos/${product.slug}`} className="block w-full h-full">
          {cover ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              <span className="text-4xl">🔧</span>
            </div>
          )}
        </Link>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Category / SKU */}
        <div className="flex items-center justify-between">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{ color: categoryColor, backgroundColor: `${categoryColor}15` }}
          >
            {product.labelType}
          </span>
          <span className="text-[10px] text-gray-600 font-mono">SKU {product.model}</span>
        </div>

        {/* Name */}
        <Link href={`/productos/${product.slug}`}>
          <h3 className="font-semibold text-white hover:text-[#C8281E] transition-colors line-clamp-2 text-sm leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Short desc */}
        {product.mainUse && (
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{product.mainUse}</p>
        )}

        {/* Price */}
        <div className="mt-auto">
          {product.priceBob ? (
            <p className="font-black tracking-tight font-black text-2xl text-white">
              Bs. {formatBob(product.priceBob)}
            </p>
          ) : (
            <p className="text-sm text-gray-500 italic">Consultar precio</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <MessageCircle size={15} />
            Pedir por WhatsApp
          </a>
          <Link
            href={`/productos/${product.slug}`}
            className="flex items-center justify-center gap-1 border border-[#2A2A2A] text-gray-400 font-medium py-2 px-4 rounded-lg hover:border-[#C8281E] hover:text-[#C8281E] transition-colors text-sm"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
