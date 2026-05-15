import { PancakeSmall, OreganoBranch } from './Decorations';
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from '../data/menu';

export function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const instagramUrl = `https://instagram.com/${INSTAGRAM_HANDLE}`;

  return (
    <footer className="relative pt-16 pb-8 px-4 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d0400 0%, #080200 100%)' }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #C0392B 30%, #D4A055 50%, #C0392B 70%, transparent)' }} />

      {/* Corner decorations */}
      <PancakeSmall className="absolute top-4 left-4 w-16 opacity-8 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute top-8 left-0 w-28 opacity-8 pointer-events-none hidden md:block" />
      <PancakeSmall className="absolute top-4 right-4 w-16 opacity-8 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute top-8 right-0 w-28 opacity-8 pointer-events-none hidden md:block scale-x-[-1]" />
      <PancakeSmall className="absolute bottom-12 left-4 w-16 opacity-8 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute bottom-16 left-0 w-28 opacity-8 pointer-events-none hidden md:block" />
      <PancakeSmall className="absolute bottom-12 right-4 w-16 opacity-8 pointer-events-none hidden md:block" />
      <OreganoBranch className="absolute bottom-16 right-0 w-28 opacity-8 pointer-events-none hidden md:block scale-x-[-1]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C0392B, #8B0000)', border: '1px solid rgba(212,160,85,0.3)' }}>
                <PancakeSmall className="w-7 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C0392B' }}>Panquecaria</p>
                <p className="text-base font-black leading-tight" style={{ color: '#F5DEB3' }}>Thiu Tonho</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#6B5040' }}>
              As panquecas mais recheadas da cidade, feitas com ingredientes frescos e muito amor artesanal.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black tracking-widest uppercase mb-4" style={{ color: '#D4A055' }}>Contato</h4>
            <div className="space-y-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200" style={{ background: 'rgba(37,211,102,0.15)' }}>
                  <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-sm group-hover:text-amber-400 transition-colors duration-200" style={{ color: '#A0856A' }}>(11) 94142-1423</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(192,57,43,0.15)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="#C0392B" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="text-sm" style={{ color: '#A0856A' }}>Rua Castro Alves, 262 - Jardim Santo Antonio</span>
              </div>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(192,57,43,0.15)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="#C0392B" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <span className="text-sm group-hover:text-amber-400 transition-colors duration-200" style={{ color: '#A0856A' }}>@{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-black tracking-widest uppercase mb-4" style={{ color: '#D4A055' }}>Horário de Funcionamento</h4>
            <div className="space-y-2">
              {[
                { day: 'Segunda a Sexta', hours: '18h às 23h' },
                { day: 'Sábado', hours: '12h às 23h' },
                { day: 'Domingo', hours: '12h às 22h' },
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#6B5040' }}>{h.day}</span>
                  <span className="text-sm font-semibold" style={{ color: '#D4A055' }}>{h.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full w-fit" style={{ background: 'rgba(45,106,79,0.2)', border: '1px solid rgba(45,106,79,0.3)' }}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold" style={{ color: '#40916C' }}>Aberto agora</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(212,160,85,0.1)' }}>
          <p className="text-xs" style={{ color: '#4A3020' }}>
            © {new Date().getFullYear()} Panquecaria Thiu Tonho. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: '#4A3020' }}>
            Feito com muito recheio e carinho
          </p>
        </div>
      </div>
    </footer>
  );
}
