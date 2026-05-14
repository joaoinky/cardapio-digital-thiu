import { PancakeSmall, OreganoBranch } from './Decorations';

const differentials = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M17.657 17.657l-.707.707M12 21v-1M6.343 17.657l-.707.707M3 12H2M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
      </svg>
    ),
    title: 'Ingredientes Frescos',
    description: 'Selecionamos os melhores ingredientes diariamente para garantir o sabor e a qualidade de cada panqueca.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
    title: 'Muito Recheio',
    description: 'Nossas panquecas são famosas pelo recheio generoso. Cada mordida é uma explosão de sabor.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Entrega Rápida',
    description: 'Sua panqueca chega quentinha na sua porta. Atendemos rapidamente toda a região.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: 'Sabor Artesanal',
    description: 'Receitas feitas com carinho, do jeito caseiro que todo mundo ama. Autêntico e irresistível.',
  },
];

export function Differentials() {
  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0800 0%, #200c00 50%, #1a0800 100%)' }}>
      {/* Corner decorations */}
      <PancakeSmall className="absolute top-4 left-4 w-20 opacity-10 pointer-events-none" />
      <OreganoBranch className="absolute top-8 left-0 w-32 opacity-10 pointer-events-none" />
      <PancakeSmall className="absolute top-4 right-4 w-20 opacity-10 pointer-events-none" />
      <OreganoBranch className="absolute top-8 right-0 w-32 opacity-10 pointer-events-none scale-x-[-1]" />
      <PancakeSmall className="absolute bottom-4 left-4 w-20 opacity-10 pointer-events-none" />
      <OreganoBranch className="absolute bottom-8 left-0 w-32 opacity-10 pointer-events-none" />
      <PancakeSmall className="absolute bottom-4 right-4 w-20 opacity-10 pointer-events-none" />
      <OreganoBranch className="absolute bottom-8 right-0 w-32 opacity-10 pointer-events-none scale-x-[-1]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#C0392B' }}>Por que escolher a gente</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F5DEB3' }}>
            Nossos Diferenciais
          </h2>
          <div className="h-0.5 w-24 mx-auto" style={{ background: 'linear-gradient(to right, transparent, #D4A055, transparent)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((d, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.04] hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #1e0800, #2d1200)',
                border: '1px solid rgba(212,160,85,0.12)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(192,57,43,0.1), transparent 60%)' }} />
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, rgba(192,57,43,0.2), rgba(139,0,0,0.3))', color: '#D4A055' }}>
                {d.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: '#F5DEB3' }}>{d.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#A0856A' }}>{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
