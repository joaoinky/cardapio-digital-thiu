// TODO: substituir pelo endereço real da loja antes de publicar
export const STORE_ADDRESS = 'Rua Humberto de Campos, 243, Francisco Morato, SP, Brasil';
export const MAX_DELIVERY_KM = 12;

/**
 * Calcula o frete com base na distância em metros.
 * - Até 1 km: grátis
 * - Acima de 1 km: R$ 5,00 fixo + R$ 0,50 a cada 0,5 km acima de 1 km
 * Exemplos: 1,5 km = R$ 5,50 | 2,5 km = R$ 6,50
 */
export function calcFreight(distanceMeters: number): number {
  const km = distanceMeters / 1000;
  if (km <= 1) return 0;
  const extraKm = km - 1;
  const brackets = Math.ceil(extraKm / 0.5);
  return 5 + brackets * 0.5;
}
