import { StateCreator } from "zustand";

export interface DrawerSlice {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export const createDrawerSlice: StateCreator<
  DrawerSlice,
  [],
  [],
  DrawerSlice
> = (set) => ({
  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
});
