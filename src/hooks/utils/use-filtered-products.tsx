import { useGlobalStore } from "@/store/use-store";
import { Product } from "@/types/product";
import { useMemo } from "react";

export const useFilteredProducts = (products: Product[] | undefined) => {
  const { selectedCategory, sortBy } = useGlobalStore();

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (sortBy === "priceAsc")
      return filtered.sort((a, b) => a.price - b.price);
    if (sortBy === "priceDesc")
      return filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [products, selectedCategory, sortBy]);

  return filteredProducts;
};
