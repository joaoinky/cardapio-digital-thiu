import { menuItems } from '../data/menu';
import { MenuCard } from './MenuCard';
import { PancakeSmall, OreganoBranch, PancakeIllustration } from './Decorations';

export function MenuSection() {
  const salgadas = menuItems.filter(i => i.category === 'salgada');
  const doces = menuItems.filter(i => i.category === 'doce');
  const bebidas = menuItems.filter(i => i.category === 'bebida');

  return (
    <section id="cardapio" className="relative py-20 px-4" style={{ background: 'linear-gradient(180deg, #0f0500 0%, #130800 50%, #0f0500 100%)' }}>
      {/* Section decorations */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #C0392B 30%, #D4A055 50%, #C0392B 70%, transparent)' }} />

      {/* Corner decorations - top */}
      <PancakeIllustration className="absolute top-8 left-4 w-24 opacity-15 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute top-12 left-2 w-28 opacity-15 pointer-events-none hidden md:block" />
      <PancakeSmall className="absolute top-8 right-4 w-20 opacity-15 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute top-12 right-2 w-28 opacity-15 pointer-events-none hidden md:block scale-x-[-1]" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#C0392B' }}>Nosso Cardápio</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F5DEB3' }}>
            Escolha seu sabor
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24" style={{ background: 'linear-gradient(to right, transparent, #D4A055)' }} />
            <PancakeSmall className="w-10 h-7" />
            <div className="h-px w-24" style={{ background: 'linear-gradient(to left, transparent, #D4A055)' }} />
          </div>
        </div>

        {/* Salgadas */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(192,57,43,0.4))' }} />
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border" style={{ background: 'rgba(192,57,43,0.1)', borderColor: 'rgba(192,57,43,0.3)' }}>
              <span className="text-lg">🧀</span>
              <h3 className="text-xl font-black tracking-wide" style={{ color: '#F5DEB3' }}>Panquecas Salgadas</h3>
            </div>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(192,57,43,0.4))' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {salgadas.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Divider with pancake decorations */}
        <div className="relative flex items-center justify-center py-8 mb-16">
          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(212,160,85,0.3), transparent)' }} />
          <div className="absolute flex items-center gap-6">
            <PancakeSmall className="w-12 h-9 opacity-60" />
            <div className="px-6 py-2 rounded-full" style={{ background: '#0f0500', border: '1px solid rgba(212,160,85,0.3)' }}>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#D4A055' }}>Agora as Doces</span>
            </div>
            <PancakeSmall className="w-12 h-9 opacity-60" />
          </div>
        </div>

        {/* Doces */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(212,160,85,0.4))' }} />
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border" style={{ background: 'rgba(212,160,85,0.1)', borderColor: 'rgba(212,160,85,0.3)' }}>
              <span className="text-lg">🍫</span>
              <h3 className="text-xl font-black tracking-wide" style={{ color: '#F5DEB3' }}>Panquecas Doces</h3>
            </div>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(212,160,85,0.4))' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {doces.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Divider with drinks decorations */}
        <div className="relative flex items-center justify-center py-8 mb-16">
          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(52,152,219,0.3), transparent)' }} />
          <div className="absolute flex items-center gap-6">
            <div className="w-10 h-8 flex items-center justify-center rounded-lg" style={{ background: 'rgba(52,152,219,0.1)', border: '1px solid rgba(52,152,219,0.3)' }}>
              <svg className="w-5 h-5" fill="none" stroke="#3498DB" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 4.715c.573-.373 1.54-.372 2.11.002l7.7 4.607c.574.343.917 1.023.917 1.756v10.848c0 .732-.343 1.412-.918 1.755l-7.7 4.607c-.57.374-1.537.375-2.11.002L2.648 19.68c-.574-.343-.917-1.023-.917-1.756V7.32c0-.733.343-1.413.918-1.756l7.7-4.607Z"/>
              </svg>
            </div>
            <div className="px-6 py-2 rounded-full" style={{ background: '#0f0500', border: '1px solid rgba(52,152,219,0.3)' }}>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#3498DB' }}>Bebidas Refrescantes</span>
            </div>
            <div className="w-10 h-8 flex items-center justify-center rounded-lg" style={{ background: 'rgba(52,152,219,0.1)', border: '1px solid rgba(52,152,219,0.3)' }}>
              <svg className="w-5 h-5" fill="none" stroke="#3498DB" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 4.715c.573-.373 1.54-.372 2.11.002l7.7 4.607c.574.343.917 1.023.917 1.756v10.848c0 .732-.343 1.412-.918 1.755l-7.7 4.607c-.57.374-1.537.375-2.11.002L2.648 19.68c-.574-.343-.917-1.023-.917-1.756V7.32c0-.733.343-1.413.918-1.756l7.7-4.607Z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Bebidas */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(52,152,219,0.4))' }} />
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border" style={{ background: 'rgba(52,152,219,0.1)', borderColor: 'rgba(52,152,219,0.3)' }}>
              <span className="text-lg">🥤</span>
              <h3 className="text-xl font-black tracking-wide" style={{ color: '#F5DEB3' }}>Bebidas</h3>
            </div>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(52,152,219,0.4))' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {bebidas.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom corner decorations */}
      <PancakeIllustration className="absolute bottom-8 left-4 w-24 opacity-15 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute bottom-4 left-2 w-32 opacity-15 pointer-events-none hidden md:block" />
      <PancakeSmall className="absolute bottom-8 right-4 w-20 opacity-15 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute bottom-4 right-2 w-32 opacity-15 pointer-events-none hidden md:block scale-x-[-1]" />

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #C0392B 30%, #D4A055 50%, #C0392B 70%, transparent)' }} />
    </section>
  );
}
