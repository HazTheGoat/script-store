import { StateCreator } from "zustand";

export type SortOption = "default" | "priceAsc" | "priceDesc";

export interface SortSlice {
  sortBy: SortOption;
  setSortBy: (sortBy: SortOption) => void;
}
export const createSortSlice: StateCreator<SortSlice, [], [], SortSlice> = (
  set
) => ({
  sortBy: "default",
  setSortBy: (sortBy) => set({ sortBy }),
});
