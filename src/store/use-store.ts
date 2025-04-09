import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createThemeSlice, ThemeSlice } from "./slices/theme-slice";
import { CartSlice, createCartSlice } from "./slices/cart-slice";
import { createFilterSlice, FilterSlice } from "./slices/filter-slice";
import { createDrawerSlice, DrawerSlice } from "./slices/drawer-slice";
import { createSortSlice, SortSlice } from "./slices/sort-slice";

type StoreState = ThemeSlice &
  CartSlice &
  FilterSlice &
  DrawerSlice &
  SortSlice;

export const useGlobalStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createThemeSlice(...a),
      ...createCartSlice(...a),
      ...createDrawerSlice(...a),
      ...createFilterSlice(...a),
      ...createSortSlice(...a),
    }),
    {
      name: "store-storage",
      // We want to persist cart.items and theme.mode
      partialize: (state) => ({
        items: state.items,
        mode: state.mode,
      }),
    }
  )
);
