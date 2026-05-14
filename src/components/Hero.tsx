import { PancakeIllustration, OreganoBranch, SauceDrip, SteamLines, PancakeSmall } from './Decorations';
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from '../data/menu';

export function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20quero%20fazer%20um%20pedido!`;
  const instagramUrl = `https://instagram.com/${INSTAGRAM_HANDLE}`;

  return (
    <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #2d1400 40%, #3d1a00 70%, #1a0a00 100%)' }}>
      {/* Wood grain texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `repeating-linear-gradient(
          88deg,
          transparent,
          transparent 2px,
          rgba(139,69,19,0.3) 2px,
          rgba(139,69,19,0.3) 3px
        ), repeating-linear-gradient(
          92deg,
          transparent,
          transparent 40px,
          rgba(101,47,10,0.2) 40px,
          rgba(101,47,10,0.2) 41px
        )`
      }} />

      {/* Warm glow spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #D4A055 0%, transparent 70%)' }} />

      {/* Top-left decorations */}
      <div className="absolute top-0 left-0 opacity-30 pointer-events-none">
        <SauceDrip className="w-64 h-24" />
      </div>
      <PancakeSmall className="absolute top-4 left-4 w-24 h-16 opacity-20 pointer-events-none" />
      <OreganoBranch className="absolute top-16 left-8 w-32 h-16 opacity-25 pointer-events-none" />

      {/* Top-right decorations */}
      <PancakeIllustration className="absolute top-2 right-4 w-36 h-24 opacity-20 pointer-events-none" />
      <OreganoBranch className="absolute top-20 right-6 w-28 h-14 opacity-20 pointer-events-none scale-x-[-1]" />
      <SteamLines className="absolute top-0 right-24 w-16 h-12 opacity-30 pointer-events-none" />

      {/* Bottom-left decorations */}
      <PancakeSmall className="absolute bottom-4 left-6 w-28 h-20 opacity-25 pointer-events-none" />
      <OreganoBranch className="absolute bottom-2 left-2 w-40 h-20 opacity-20 pointer-events-none" />

      {/* Bottom-right decorations */}
      <PancakeIllustration className="absolute bottom-2 right-6 w-32 h-22 opacity-25 pointer-events-none" />
      <OreganoBranch className="absolute bottom-8 right-2 w-36 h-18 opacity-20 pointer-events-none scale-x-[-1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
        {/* Logo mark */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border-2" style={{ background: 'linear-gradient(135deg, #C0392B, #8B0000)', borderColor: '#D4A055' }}>
            <PancakeSmall className="w-10 h-8" />
          </div>
        </div>

        <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#D4A055' }}>
          Cardápio Digital
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-3" style={{ color: '#F5DEB3', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
          Panquecaria
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6" style={{ color: '#D4A055', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
          Thiu Tonho
        </h1>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #D4A055)' }} />
          <span className="text-sm" style={{ color: '#C8893E' }}>★★★★★</span>
          <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #D4A055)' }} />
        </div>

        <p className="text-xl md:text-2xl font-light mb-10 max-w-lg" style={{ color: '#F5DEB3', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
          As panquecas mais recheadas da cidade
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: '#fff',
            boxShadow: '0 8px 32px rgba(37,211,102,0.35)'
          }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Fazer Pedido no WhatsApp
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </a>

        {/* Delivery badge */}
        <div className="mt-8 flex items-center gap-2 px-5 py-2 rounded-full border" style={{ borderColor: 'rgba(212,160,85,0.3)', background: 'rgba(212,160,85,0.1)' }}>
          <svg className="w-4 h-4" fill="none" stroke="#D4A055" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zm-14-4l2-6h10l2 4H5z"/>
          </svg>
          <span className="text-sm font-medium" style={{ color: '#D4A055' }}>Entrega rápida na região</span>
        </div>

        {/* Social links */}
        <div className="mt-5 flex items-center gap-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{ background: 'rgba(192,57,43,0.15)', border: '1px solid rgba(192,57,43,0.3)', color: '#F5DEB3' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #0f0500)' }} />
    </header>
  );
}
