import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { label: 'Gasolina & Almacenamiento', href: '/catalogo?categoria=Gasolina' },
  { label: 'Diésel', href: '/catalogo?categoria=Diesel' },
  { label: 'Marino', href: '/catalogo?categoria=Marino' },
  { label: 'Exterior & Protección', href: '/catalogo?categoria=Exterior' },
];

const info = [
  { label: 'Ver catálogo completo', href: '/catalogo' },
  { label: '¿Cómo pedir?', href: '/#como-pedir' },
  { label: '¿Por qué STA-BIL?', href: '/#trust' },
];

export default function Footer() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? '';

  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image src="/STA-BIL LOGO.png" alt="STA-BIL" width={100} height={42} className="object-contain mb-4" />
          <p className="text-sm text-gray-500 leading-relaxed">
            El estabilizador de combustible #1 de Estados Unidos. Distribuidor oficial en Bolivia.
          </p>
          <div className="mt-4">
            <span className="inline-block bg-[#C8281E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Distribuidor Oficial Bolivia
            </span>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">Categorías</h3>
          <ul className="space-y-2">
            {categories.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">Información</h3>
          <ul className="space-y-2">
            {info.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div id="contacto">
          <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">Contacto</h3>
          <p className="text-sm text-gray-500 mb-4">Pedidos y consultas vía WhatsApp</p>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            💬 Escríbenos
          </a>
          <p className="text-xs text-gray-600 mt-4">Lun–Sáb · 9:00–20:00</p>
        </div>
      </div>

      <div className="border-t border-[#2A2A2A] py-5 px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-gray-600">© 2025 STA-BIL Bolivia — Todos los derechos reservados</p>
        <p className="text-xs text-gray-600">STA-BIL® es marca registrada de Gold Eagle Co.</p>
      </div>
    </footer>
  );
}
