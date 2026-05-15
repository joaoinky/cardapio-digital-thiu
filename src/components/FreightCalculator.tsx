import { useState } from 'react';
import { STORE_ADDRESS, calcFreight, MAX_DELIVERY_KM } from '../data/delivery';

// Tipos mínimos do Google Maps JS API para evitar dependência de @types/google.maps
declare global {
  interface Window {
    google?: {
      maps: {
        DistanceMatrixService: new () => {
          getDistanceMatrix(
            request: {
              origins: string[];
              destinations: string[];
              travelMode: string;
              unitSystem: number;
            },
            callback: (
              response: {
                rows: Array<{
                  elements: Array<{
                    distance: { value: number; text: string };
                    status: string;
                  }>;
                }>;
              } | null,
              status: string
            ) => void
          ): void;
        };
        TravelMode: { DRIVING: string };
        UnitSystem: { METRIC: number };
      };
    };
  }
}

interface FreightCalculatorProps {
  onFreightChange?: (freight: number | null, unavailable: boolean) => void;
  variant?: 'dark' | 'light';
}

// Singleton: carrega o script Google Maps uma única vez por sessão
let mapsLoadPromise: Promise<void> | null = null;

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (window.google?.maps?.DistanceMatrixService) return Promise.resolve();
  if (mapsLoadPromise) return mapsLoadPromise;
  mapsLoadPromise = new Promise((resolve, reject) => {
    // O parâmetro `callback` é obrigatório: o Google Maps chama essa função
    // global apenas quando a API está 100% inicializada. Usar só `onload`
    // dispara cedo demais — o Maps ainda faz setup interno assíncrono depois.
    const callbackName = '__googleMapsReady__';
    const w = window as unknown as Record<string, unknown>;
    w[callbackName] = () => {
      delete w[callbackName];
      resolve();
    };
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}&loading=async`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      mapsLoadPromise = null;
      delete w[callbackName];
      reject(new Error('Falha ao carregar Google Maps'));
    };
    document.head.appendChild(script);
  });
  return mapsLoadPromise;
}

function formatCep(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 8);
  if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return digits;
}

export function FreightCalculator({ onFreightChange, variant = 'dark' }: FreightCalculatorProps) {
  const isLight = variant === 'light';
  const [cep, setCep] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error' | 'unavailable'>('idle');
  const [result, setResult] = useState<{ distanceKm: number; freight: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = cep.replace(/\D/g, '');

    if (digits.length !== 8) {
      setErrorMsg('CEP inválido. Digite 8 dígitos.');
      setStatus('error');
      return;
    }

    if (!apiKey) {
      setErrorMsg('Chave da API Google Maps não configurada (VITE_GOOGLE_MAPS_KEY).');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');
    setResult(null);

    try {
      await loadGoogleMaps(apiKey);
      const service = new window.google!.maps.DistanceMatrixService();
      const destination = `${digits.slice(0, 5)}-${digits.slice(5)}, Brasil`;

      service.getDistanceMatrix(
        {
          origins: [STORE_ADDRESS],
          destinations: [destination],
          travelMode: window.google!.maps.TravelMode.DRIVING,
          unitSystem: window.google!.maps.UnitSystem.METRIC,
        },
        (response, apiStatus) => {
          if (apiStatus !== 'OK' || !response) {
            setErrorMsg('Não foi possível calcular a distância. Verifique o CEP.');
            setStatus('error');
            return;
          }
          const element = response.rows[0]?.elements[0];
          if (!element || element.status !== 'OK') {
            setErrorMsg('CEP não encontrado ou fora da área de entrega.');
            setStatus('error');
            return;
          }
          const distanceMeters = element.distance.value;
          const distanceKm = distanceMeters / 1000;
          if (distanceKm > MAX_DELIVERY_KM) {
            setResult({ distanceKm, freight: 0 });
            setStatus('unavailable');
            onFreightChange?.(null, true);
            return;
          }
          const freight = calcFreight(distanceMeters);
          setResult({ distanceKm, freight });
          setStatus('ok');
          onFreightChange?.(freight, false);
        }
      );
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao calcular frete.');
      setStatus('error');
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(formatCep(e.target.value));
    if (status !== 'idle') {
      setStatus('idle');
      setResult(null);
      onFreightChange?.(null, false);
    }
  };

  return (
    <div
      className="rounded-xl p-3 space-y-2"
      style={{
        background: isLight ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isLight ? 'rgba(255,255,255,0.3)' : 'rgba(212,160,85,0.1)'}`,
      }}
    >
      <p className="text-xs font-semibold" style={{ color: isLight ? '#F5DEB3' : '#A0856A' }}>
        Calcular frete por CEP
      </p>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          inputMode="numeric"
          placeholder="00000-000"
          value={cep}
          onChange={handleCepChange}
          maxLength={9}
          className="flex-1 rounded-lg px-3 py-2 text-sm outline-none"
          style={{
            background: isLight ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${isLight ? 'rgba(255,255,255,0.4)' : 'rgba(212,160,85,0.2)'}`,
            color: '#F5DEB3',
          }}
          aria-label="CEP para calcular frete"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-3 py-2 rounded-lg text-xs font-bold transition-opacity"
          style={{
            background: isLight ? '#F5DEB3' : 'linear-gradient(135deg, #C0392B, #8B0000)',
            color: isLight ? '#8B0000' : '#F5DEB3',
            opacity: status === 'loading' ? 0.6 : 1,
          }}
        >
          {status === 'loading' ? '…' : 'OK'}
        </button>
      </form>

      {status === 'error' && (
        <p className="text-xs" style={{ color: isLight ? '#FFD0CC' : '#E74C3C' }}>{errorMsg}</p>
      )}

      {status === 'unavailable' && result && (
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: isLight ? 'rgba(245,222,179,0.8)' : '#6B5040' }}>
            {result.distanceKm.toFixed(1).replace('.', ',')} km da loja
          </span>
          <span className="text-xs font-bold" style={{ color: isLight ? '#FFD0CC' : '#E74C3C' }}>
            Entrega indisponível
          </span>
        </div>
      )}

      {status === 'ok' && result && (
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: isLight ? 'rgba(245,222,179,0.8)' : '#6B5040' }}>
            {result.distanceKm.toFixed(1).replace('.', ',')} km da loja
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: result.freight === 0 ? '#25D366' : (isLight ? '#F5DEB3' : '#D4A055') }}
          >
            {result.freight === 0 ? 'Frete grátis!' : `R$ ${result.freight.toFixed(2).replace('.', ',')}`}
          </span>
        </div>
      )}
    </div>
  );
}
