import { Product } from "@/types";
import { StateCreator } from "zustand";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartSlice {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  updateItemQuantity: (id: number, quantity: number) => void;
}

export const createCartSlice: StateCreator<CartSlice, [], [], CartSlice> = (
  set
) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.product.id === item.product.id
      );

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.product.id === item.product.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }

      return { items: [...state.items, item] };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== id),
    })),
  // Update quantity of an item
  updateItemQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === id ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
});
