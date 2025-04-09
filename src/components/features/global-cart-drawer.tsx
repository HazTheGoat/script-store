"use client";

import { useGlobalStore } from "@/store";
import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGetCartItemsQuantity } from "@/hooks/api";
import { CartSummary } from "../ui";
import { CartProductList } from "./cart-product-list";

export const GlobalCartDrawer = () => {
  const { isCartOpen, closeCart, clearCart } = useGlobalStore();
  const quantity = useGetCartItemsQuantity();

  return (
    <Drawer
      aria-labelledby="cart-drawer-title"
      anchor="right"
      open={isCartOpen}
      onClose={closeCart}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: 350,
            md: 500,
          },
          p: 2,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              color="primary"
              variant="outlined"
              aria-label="close cart"
              onClick={closeCart}
              sx={{
                width: 40,
                height: 40,
                minWidth: 0,
                mr: 1,
              }}
            >
              <CloseIcon />
            </Button>
            <Typography variant="h6" gutterBottom id="cart-drawer-title">
              Din handlekurv
            </Typography>
          </Box>
          <Typography aria-live="polite">
            {quantity === 1
              ? `(${quantity} vare)`
              : quantity > 1
              ? `(${quantity} varer)`
              : "(Ingen varer)"}
          </Typography>
        </Stack>

        <CartProductList />
        <CartSummary />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Gå til kassen
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={clearCart}
        >
          Tøm handlekurven
        </Button>
      </Box>
    </Drawer>
  );
};
