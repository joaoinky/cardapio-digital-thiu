import { useState } from 'react';
import { MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export function MenuCard({ item, index }: MenuCardProps) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const isDoce = item.category === 'doce';
  const isBebida = item.category === 'bebida';

  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        background: isBebida
          ? 'linear-gradient(135deg, #001a2d 0%, #000d1a 100%)'
          : isDoce
          ? 'linear-gradient(135deg, #2d1a00 0%, #1a0d00 100%)'
          : 'linear-gradient(135deg, #1e0800 0%, #2d1200 60%, #1e0800 100%)',
        border: '1px solid rgba(212,160,85,0.15)',
        animationDelay: `${index * 50}ms`
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: isBebida ? 'radial-gradient(circle at 50% 0%, rgba(52,152,219,0.12), transparent 60%)' : 'radial-gradient(circle at 50% 0%, rgba(192,57,43,0.12), transparent 60%)' }} />

      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: isBebida ? 'linear-gradient(to right, transparent, #3498DB, transparent)' : isDoce ? 'linear-gradient(to right, transparent, #D4A055, transparent)' : 'linear-gradient(to right, transparent, #C0392B, transparent)' }} />

      <div className="p-5">
        {/* Number badge + name */}
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black" style={{ background: isBebida ? 'linear-gradient(135deg, #3498DB, #2980B9)' : isDoce ? 'linear-gradient(135deg, #D4A055, #C8893E)' : 'linear-gradient(135deg, #C0392B, #8B0000)', color: '#F5DEB3' }}>
            {String(item.id).padStart(2, '0')}
          </span>
          <h3 className="text-base font-bold leading-tight pt-1" style={{ color: '#F5DEB3' }}>
            {item.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm mb-4 leading-relaxed" style={{ color: '#A0856A' }}>
          {item.description}
        </p>

        {/* Price + button */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-xl font-black" style={{ color: isBebida ? '#3498DB' : '#D4A055' }}>
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: added
                ? 'linear-gradient(135deg, #27AE60, #1E8449)'
                : isBebida ? 'linear-gradient(135deg, #3498DB, #2980B9)'
                : isDoce ? 'linear-gradient(135deg, #D4A055, #C8893E)'
                : 'linear-gradient(135deg, #C0392B, #8B0000)',
              color: '#F5DEB3',
              boxShadow: added
                ? '0 4px 12px rgba(39,174,96,0.35)'
                : isBebida ? '0 4px 12px rgba(52,152,219,0.25)'
                : isDoce ? '0 4px 12px rgba(212,160,85,0.25)'
                : '0 4px 12px rgba(192,57,43,0.25)',
            }}
          >
            {added ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Adicionado!
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                Adicionar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
