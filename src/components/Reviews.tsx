import { OreganoBranch, PancakeSmall } from './Decorations';

const reviews = [
  { name: 'Mariana S.', text: 'Melhor panqueca que já comi! O recheio é generoso demais, dá pra sentir o amor em cada garfada. Já pedi mais de 10 vezes!', stars: 5, avatar: 'M' },
  { name: 'João Pedro T.', text: 'A costela com cream cheese e bacon é simplesmente perfeita. Chega quentinha e bem embalada. Super recomendo!', stars: 5, avatar: 'J' },
  { name: 'Fernanda L.', text: 'A Nutella com morango é uma das melhores sobremesas que já provei. A massa é fininha e o recheio transborda!', stars: 5, avatar: 'F' },
  { name: 'Ricardo M.', text: 'Atendimento rápido e comida deliciosa. A panqueca de carne seca com cheddar é incrível. Virei cliente fiel!', stars: 5, avatar: 'R' },
  { name: 'Ana Clara B.', text: 'Pedi a À Moda do Cliente com meus ingredientes favoritos e ficou sensacional. Vale muito cada centavo!', stars: 5, avatar: 'A' },
  { name: 'Thiago O.', text: 'A entrega foi super rápida e a panqueca veio bem quentinha. O sabor da Rúcula com tomate seco é diferenciado!', stars: 5, avatar: 'T' },
];

export function Reviews() {
  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0500 0%, #160900 100%)' }}>
      {/* Corner decorations */}
      <PancakeSmall className="absolute top-4 left-4 w-20 opacity-10 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute top-8 left-0 w-32 opacity-10 pointer-events-none hidden md:block" />
      <PancakeSmall className="absolute top-4 right-4 w-20 opacity-10 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute top-8 right-0 w-32 opacity-10 pointer-events-none hidden md:block scale-x-[-1]" />
      <PancakeSmall className="absolute bottom-4 left-4 w-20 opacity-10 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute bottom-8 left-0 w-32 opacity-10 pointer-events-none hidden md:block" />
      <PancakeSmall className="absolute bottom-4 right-4 w-20 opacity-10 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute bottom-8 right-0 w-32 opacity-10 pointer-events-none hidden md:block scale-x-[-1]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#C0392B' }}>Depoimentos</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F5DEB3' }}>
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl" style={{ color: '#D4A055' }}>
            {'★★★★★'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #1e0800, #2a1000)',
                border: '1px solid rgba(212,160,85,0.12)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black" style={{ background: 'linear-gradient(135deg, #C0392B, #8B0000)', color: '#F5DEB3' }}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#F5DEB3' }}>{r.name}</p>
                  <div className="flex gap-0.5 text-xs" style={{ color: '#D4A055' }}>
                    {'★'.repeat(r.stars)}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed italic" style={{ color: '#A0856A' }}>
                "{r.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
