import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../data/menu';
import { FreightCalculator } from './FreightCalculator';

interface CartProps {
  open: boolean;
  onClose: () => void;
}

function fmt(value: number) {
  return value.toFixed(2).replace('.', ',');
}

function categoryGradient(category: string) {
  if (category === 'bebida') return 'linear-gradient(135deg, #3498DB, #2980B9)';
  if (category === 'doce') return 'linear-gradient(135deg, #D4A055, #C8893E)';
  return 'linear-gradient(135deg, #C0392B, #8B0000)';
}

export function Cart({ open, onClose }: CartProps) {
  const { items, remove, updateQty, clear, total, count, freight, deliveryUnavailable, setFreightResult } = useCart();

  const grandTotal = total + (freight ?? 0);

  const buildWhatsAppUrl = () => {
    const lines = items.map(
      ci => `${ci.qty}x ${ci.item.name} — R$ ${fmt(ci.item.price * ci.qty)}`
    );
    const freightLine = freight === 0 ? 'Frete: Grátis' : `Frete: R$ ${fmt(freight!)}`;
    const msg = `Olá, quero fazer este pedido:\n${lines.join('\n')}\nSubtotal: R$ ${fmt(total)}\n${freightLine}\nTotal: R$ ${fmt(grandTotal)}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.75)' }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full z-50 flex flex-col transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          width: 'min(420px, 100vw)',
          background: 'linear-gradient(180deg, #1e0a00 0%, #130600 100%)',
          borderLeft: '1px solid rgba(212,160,85,0.2)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.6)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(212,160,85,0.15)' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #C0392B, #8B0000)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="#F5DEB3" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-black tracking-wide leading-tight" style={{ color: '#F5DEB3' }}>
                Meu Carrinho
              </h2>
              {count > 0 && (
                <p className="text-xs leading-tight" style={{ color: '#A0856A' }}>
                  {count} {count === 1 ? 'item' : 'itens'} · R$ {fmt(total)}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ color: '#6B5040' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            aria-label="Fechar carrinho"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Item list */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-20">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(192,57,43,0.1)', border: '1px solid rgba(192,57,43,0.2)' }}
              >
                <svg className="w-8 h-8" fill="none" stroke="#C0392B" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#6B5040' }}>Carrinho vazio</p>
              <p className="text-xs text-center max-w-[180px]" style={{ color: '#4A3020' }}>
                Adicione itens do cardápio para montar seu pedido
              </p>
            </div>
          ) : (
            items.map(ci => (
              <div
                key={ci.item.id}
                className="rounded-xl p-3 flex items-center gap-3"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(212,160,85,0.1)',
                }}
              >
                {/* Category badge */}
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: categoryGradient(ci.item.category), color: '#F5DEB3' }}
                >
                  {String(ci.item.id).padStart(2, '0')}
                </div>

                {/* Name + unit price */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate" style={{ color: '#F5DEB3' }}>
                    {ci.item.name}
                  </p>
                  <p className="text-xs" style={{ color: '#6B5040' }}>
                    R$ {fmt(ci.item.price)} cada
                  </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  {/* Remove */}
                  <button
                    onClick={() => remove(ci.item.id)}
                    style={{ color: '#4A3020' }}
                    aria-label={`Remover ${ci.item.name}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>

                  {/* Qty stepper */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => updateQty(ci.item.id, ci.qty - 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold leading-none"
                      style={{ background: 'rgba(192,57,43,0.25)', color: '#C0392B' }}
                      aria-label="Diminuir quantidade"
                    >
                      −
                    </button>
                    <span className="text-sm font-bold w-5 text-center" style={{ color: '#F5DEB3' }}>
                      {ci.qty}
                    </span>
                    <button
                      onClick={() => updateQty(ci.item.id, ci.qty + 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold leading-none"
                      style={{ background: 'rgba(212,160,85,0.25)', color: '#D4A055' }}
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="text-xs font-bold" style={{ color: '#D4A055' }}>
                    R$ {fmt(ci.item.price * ci.qty)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className="px-5 py-4 flex-shrink-0 space-y-3"
            style={{ borderTop: '1px solid rgba(212,160,85,0.15)' }}
          >
            {/* Calcular frete */}
            <FreightCalculator onFreightChange={setFreightResult} />

            {/* Subtotal + frete + total */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: '#6B5040' }}>Subtotal</span>
                <span className="text-sm font-semibold" style={{ color: '#A0856A' }}>
                  R$ {fmt(total)}
                </span>
              </div>
              {freight !== null && (
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: '#6B5040' }}>Frete</span>
                  <span className="text-sm font-semibold" style={{ color: freight === 0 ? '#25D366' : '#A0856A' }}>
                    {freight === 0 ? 'Grátis' : `R$ ${fmt(freight)}`}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between pt-1" style={{ borderTop: '1px solid rgba(212,160,85,0.1)' }}>
                <span className="text-sm" style={{ color: '#A0856A' }}>Total do pedido</span>
                <span className="text-2xl font-black" style={{ color: '#D4A055' }}>
                  R$ {fmt(grandTotal)}
                </span>
              </div>
            </div>

            {/* CTA */}
            {deliveryUnavailable ? (
              <div
                className="flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold"
                style={{ background: 'rgba(231,76,60,0.12)', color: '#E74C3C', border: '1px solid rgba(231,76,60,0.25)' }}
              >
                Entrega indisponível nessa região
              </div>
            ) : freight === null ? (
              <div
                className="flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold"
                style={{ background: 'rgba(255,255,255,0.04)', color: '#6B5040', border: '1px solid rgba(212,160,85,0.1)' }}
              >
                Calcule o frete para continuar
              </div>
            ) : (
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Finalizar Pedido
              </a>
            )}

            <button
              onClick={clear}
              className="w-full text-xs text-center py-1 transition-opacity hover:opacity-70"
              style={{ color: '#4A3020' }}
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}
