import { Box, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Price } from "./price";
import { useGlobalStore } from "@/store/use-store";

export const CartSummary = () => {
  const { items } = useGlobalStore();

  const subtotal = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [items]);

  return (
    <Box>
      <Typography variant="h6">Summary</Typography>
      <Typography>Free shipping on purchases over 1,000,-</Typography>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mt: 2 }}
      >
        <Typography variant="h6">Total:</Typography>
        <Price price={subtotal} variant="h6" />
      </Stack>
    </Box>
  );
};
