import { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../data/menu';

export interface CartItem {
  item: MenuItem;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  add: (item: MenuItem) => void;
  remove: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  freight: number | null;
  deliveryUnavailable: boolean;
  setFreightResult: (freight: number | null, unavailable: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [freight, setFreight] = useState<number | null>(null);
  const [deliveryUnavailable, setDeliveryUnavailable] = useState(false);

  const add = (item: MenuItem) => {
    setItems(prev => {
      const existing = prev.find(ci => ci.item.id === item.id);
      if (existing) {
        return prev.map(ci => ci.item.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci);
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const remove = (id: number) => {
    setItems(prev => prev.filter(ci => ci.item.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      remove(id);
      return;
    }
    setItems(prev => prev.map(ci => ci.item.id === id ? { ...ci, qty } : ci));
  };

  const clear = () => setItems([]);

  const setFreightResult = (value: number | null, unavailable: boolean) => {
    setFreight(value);
    setDeliveryUnavailable(unavailable);
  };

  const total = items.reduce((sum, ci) => sum + ci.item.price * ci.qty, 0);
  const count = items.reduce((sum, ci) => sum + ci.qty, 0);

  return (
    <CartContext.Provider value={{
      items, add, remove, updateQty, clear, total, count,
      freight, deliveryUnavailable, setFreightResult,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
