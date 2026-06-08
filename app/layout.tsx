import type { Metadata } from 'next';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/cart/CartDrawer';

export const metadata: Metadata = {
  title: 'STA-BIL Bolivia — Aditivos y Estabilizadores de Combustible',
  description: 'Distribuidor oficial de STA-BIL en Bolivia. El estabilizador de combustible #1 de Estados Unidos. Protege tu motor, gasolina, diésel, motores marinos y más.',
  openGraph: {
    title: 'STA-BIL Bolivia — Aditivos y Estabilizadores de Combustible',
    description: 'El estabilizador de combustible #1 de EE.UU. ahora en Bolivia.',
    type: 'website',
    locale: 'es_BO',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased flex flex-col min-h-screen bg-white text-[#111111]">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
