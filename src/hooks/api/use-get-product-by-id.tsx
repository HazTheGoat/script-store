import { Product } from "@/types/product";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getProductById } from "@/services/get-product-by-id";

export const USE_GET_PRODUCT = "USE_GET_PRODUCT";

type Props = {
  id: number;
};
/**
 * This hook that fetches a list of products from the API
 * @returns - A list of products
 */
export const useGetProductById = ({ id }: Props): UseQueryResult<Product> => {
  return useQuery({
    queryKey: [USE_GET_PRODUCT, { id }],
    queryFn: () => getProductById({ id }),
    staleTime: 1000 * 60 * 1, // 1 min cache
    /**
     *   Her kan vi adde alle mulige options som vi vil ha
     *   F.eks kan vi ha en refetchInterval som henter data hvert 5. minutt
     *   refetchInterval: 5 * 60 * 1000, // 5 min
     *   Et annet alternativ er å bruke staleTime som gjør at vi kan cache data i 5 min
     *   staleTime: 5 * 60 * 1000, // 5 min
     */
  });
};
