import { formatCurrency } from "@/utils/format-currency";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import { QuantitySelector } from "../ui/quantity-selector";
import { useGlobalStore } from "@/store/use-store";
import CloseIcon from "@mui/icons-material/Close";

export const CartProductList = () => {
  const { items, removeItem } = useGlobalStore();
  return (
    <List sx={{ mb: 2 }}>
      {items.map((item) => (
        <div key={item.product.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar sx={{ mr: 1 }}>
              <Avatar
                variant="square"
                src={item.product.image}
                alt={item.product.title}
                sx={{ width: 60, height: 60 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.product.title}
              secondary={formatCurrency(item.product.price)}
            />
            <IconButton edge="end" onClick={() => removeItem(item.product.id)}>
              <CloseIcon />
            </IconButton>
          </ListItem>

          <Box sx={{ pl: 2, pr: 2, mb: 1 }}>
            <Typography variant="body2">Antall:</Typography>
            <QuantitySelector item={item} />
          </Box>

          <Divider />
        </div>
      ))}
    </List>
  );
};
