import { CartItem } from "@/store/slices/cart-slice";
import { useGlobalStore } from "@/store/use-store";
import { Select, MenuItem } from "@mui/material";
import React from "react";

type Props = {
  item: CartItem;
};
export const QuantitySelector = ({ item }: Props) => {
  const { items, updateItemQuantity } = useGlobalStore();

  const handleQuantityChange = (productId: number, quantity: number) => {
    const existingItem = items.find((item) => item.product.id === productId);
    if (!existingItem) return;

    updateItemQuantity(productId, quantity);
  };

  return (
    <Select
      size="small"
      value={item.quantity}
      onChange={(e) =>
        handleQuantityChange(item.product.id, Number(e.target.value))
      }
      sx={{ width: 70 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qty) => (
        <MenuItem key={qty} value={qty}>
          {qty}
        </MenuItem>
      ))}
    </Select>
  );
};
