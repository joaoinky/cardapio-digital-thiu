import { FreightCalculator } from './FreightCalculator';
import { useCart } from '../context/CartContext';

export function DeliveryBanner() {
  const { setFreightResult } = useCart();

  return (
    <section className="relative py-14 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #8B0000 0%, #C0392B 50%, #8B0000 100%)' }}>
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 11px)' }} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <svg className="w-10 h-10" fill="none" stroke="#F5DEB3" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zm-14-4l2-6h10l2 4H5z"/>
          </svg>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: '#F5DEB3' }}>
            Entrega Rápida na Região
          </h2>
        </div>
        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(245,222,179,0.85)' }}>
          Sua panqueca favorita chega quentinha na sua porta. Atendemos toda a região com agilidade e cuidado.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {['Pedido rápido pelo WhatsApp', 'Pagamento na entrega', 'Embalagem especial'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(245,222,179,0.2)' }}>
                <svg className="w-3 h-3" fill="none" stroke="#F5DEB3" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span className="text-sm font-medium" style={{ color: 'rgba(245,222,179,0.9)' }}>{item}</span>
            </div>
          ))}
        </div>
        <div className="max-w-sm mx-auto w-full">
          <FreightCalculator variant="light" onFreightChange={setFreightResult} />
        </div>
      </div>
    </section>
  );
}
