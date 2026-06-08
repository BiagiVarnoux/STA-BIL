import { getFeaturedProducts, type ProductWithImages } from '@/lib/products';
import Hero from '@/components/home/Hero';
import BrandTicker from '@/components/home/BrandTicker';
import Heritage from '@/components/home/Heritage';
import EquipmentSection from '@/components/home/EquipmentSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import HowToOrder from '@/components/home/HowToOrder';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let products: ProductWithImages[] = [];
  try {
    products = await getFeaturedProducts();
  } catch {
    // DB unavailable — page still renders without products
  }

  return (
    <>
      {/* 1. Full-screen mission-first hero */}
      <Hero />

      {/* 2. Scrolling brand ticker */}
      <BrandTicker />

      {/* 3. Company heritage timeline + mission statement */}
      <Heritage />

      {/* 4. Browse by equipment type */}
      <EquipmentSection />

      {/* 5. Featured products */}
      <FeaturedProducts products={products} />

      {/* 6. Unconditional guarantee CTA (full red) */}
      <GuaranteeSection />

      {/* 7. How to order — WhatsApp steps */}
      <HowToOrder />
    </>
  );
}
