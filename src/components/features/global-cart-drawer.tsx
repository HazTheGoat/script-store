"use client";

import { useGlobalStore } from "@/store/use-store";
import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGetCartItemsQuantity } from "@/hooks/api/use-get-cart-items-quantity";
import { CartSummary } from "../ui/cart-summary";
import { CartProductList } from "./cart-product-list";

export const GlobalCartDrawer = () => {
  const { isCartOpen, closeCart, clearCart } = useGlobalStore();
  const quantity = useGetCartItemsQuantity();

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={closeCart}>
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
                display: { xs: "flex", md: "none" },
              }}
            >
              <CloseIcon />
            </Button>
            <Typography variant="h6" gutterBottom>
              Din handlekurv
            </Typography>
          </Box>
          <Typography>
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
