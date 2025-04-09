import { BASE_URL } from "@/constants/urls";
import { Product } from "@/types/product";
import axios from "axios";

/**
 * This function fetches a list of products from the API
 * @returns - A list of products
 */
export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(`${BASE_URL}/products`);

  return data;
};
