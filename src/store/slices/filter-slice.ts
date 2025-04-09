import { StateCreator } from "zustand";
import { Category } from "@/types/category"; // Assuming you have the Category enum already

export interface FilterSlice {
  selectedCategory: Category | "all";
  setCategory: (category: Category | "all") => void;
}

export const createFilterSlice: StateCreator<
  FilterSlice,
  [],
  [],
  FilterSlice
> = (set) => ({
  selectedCategory: "all",
  setCategory: (category) => set({ selectedCategory: category }),
});
