import { WHATSAPP_NUMBER } from '../data/menu';

export function DeliveryBanner() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20quero%20saber%20sobre%20a%20entrega%20na%20minha%20região!`;

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
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{ background: '#F5DEB3', color: '#8B0000' }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Verificar entrega na minha área
        </a>
      </div>
    </section>
  );
}
