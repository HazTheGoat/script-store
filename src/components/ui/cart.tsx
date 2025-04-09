import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { IconButton } from "@mui/material";
import { useGlobalStore } from "@/store";
import { useGetCartItemsQuantity } from "@/hooks/api";

export const Cart = () => {
  const openCart = useGlobalStore((state) => state.openCart);

  const quantity = useGetCartItemsQuantity();
  return (
    <IconButton
      LinkComponent={"a"}
      aria-label="Shopping cart"
      color="inherit"
      sx={{
        position: "relative",
      }}
      onClick={() => openCart()}
    >
      <LocalMallIcon />
      {quantity > 0 && (
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
          }}
        >
          {quantity}
        </span>
      )}
    </IconButton>
  );
};
