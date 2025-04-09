import { useGlobalStore } from "@/store/use-store";
import { useMemo } from "react";

export const useGetCartItemsQuantity = () => {
  const { items } = useGlobalStore();

  return useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);
};
