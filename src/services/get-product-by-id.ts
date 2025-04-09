import { BASE_URL } from "@/constants";
import { Product } from "@/types";
import axios from "axios";

type Props = {
  id: number;
};
/**
 * Returns a product by id
 * @param id - The id of the product
 * @returns - The product
 */
export const getProductById = async ({ id }: Props): Promise<Product> => {
  const { data } = await axios.get<Product>(`${BASE_URL}/products/${id}`);

  return data;
};
