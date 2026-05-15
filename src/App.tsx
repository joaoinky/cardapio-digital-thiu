import { useState } from 'react';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Differentials } from './components/Differentials';
import { DeliveryBanner } from './components/DeliveryBanner';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Cart } from './components/Cart';
import { CartProvider, useCart } from './context/CartContext';

function CartButton({ onClick }: { onClick: () => void }) {
  const { count } = useCart();
  return (
    <button
      onClick={onClick}
      className="fixed top-4 right-4 z-30 flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
      style={{
        background: 'linear-gradient(135deg, #C0392B, #8B0000)',
        boxShadow: '0 4px 20px rgba(192,57,43,0.45)',
        border: '1px solid rgba(212,160,85,0.25)',
      }}
      aria-label="Abrir carrinho"
    >
      <svg className="w-5 h-5" fill="none" stroke="#F5DEB3" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      <span className="text-sm font-bold" style={{ color: '#F5DEB3' }}>Carrinho</span>
      {count > 0 && (
        <span
          className="flex items-center justify-center w-5 h-5 rounded-full text-xs font-black"
          style={{ background: '#D4A055', color: '#1a0a00' }}
        >
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
}

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="min-h-screen" style={{ background: '#0f0500' }}>
      <CartButton onClick={() => setCartOpen(true)} />
      <Hero />
      <MenuSection />
      <DeliveryBanner />
      <Differentials />
      <Reviews />
      <Footer />
      <WhatsAppFloat />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
