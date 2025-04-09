import { getProducts } from "@/services/get-products";
import { Product } from "@/types/product";
import { type UseQueryResult, useQuery } from "@tanstack/react-query";

export const USE_GET_PRODUCTS = "USE_GET_PRODUCTS";

export const useGetProducts = (): UseQueryResult<Product[]> => {
  return useQuery({
    queryKey: [USE_GET_PRODUCTS],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 1, // 1 min cache
    /**
     *   Her kan vi adde alle mulige options som vi vil ha
     *   F.eks kan vi ha en refetchInterval som henter data hvert 5. minutt
     *   refetchInterval: 5 * 60 * 1000, // 5 min
     */
  });
};
