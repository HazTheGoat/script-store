import { useGlobalStore } from "@/store";
import { Product } from "@/types";
import { Button } from "@mui/material";

type Props = {
  product: Product;
};
export const AddToCart = ({ product }: Props) => {
  const addItem = useGlobalStore((state) => state.addItem);
  const openCart = useGlobalStore((state) => state.openCart);

  const handleAddToCart = () => {
    addItem({ product, quantity: 1 });
    openCart();
  };
  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      fullWidth
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
};
