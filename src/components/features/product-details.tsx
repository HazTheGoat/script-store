"use client";

import { useGetProductById } from "@/hooks/api";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Price, AddToCart, Rating, ProductImage } from "../ui/";

type Props = {
  id: number;
};
export const ProductDetails = ({ id }: Props) => {
  const { data: product, error, isLoading } = useGetProductById({ id });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  if (product) {
    return (
      <Grid container spacing={2}>
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 6,
          }}
        >
          <ProductImage
            alt={product.title}
            priority={true}
            imgUrl={product.image}
            height={{
              xs: 200,
              sm: 250,
              md: 750,
            }}
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 6,
          }}
        >
          <Box mb={2}>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="overline" color="text.secondary">
              {product.category}
            </Typography>
          </Box>
          <Typography variant="body1" mb={2}>
            {product.description}
          </Typography>
          <Stack mb={2} direction={"row"} justifyContent={"space-between"}>
            <Price price={product.price} variant="h6" />
            <Rating rating={product.rating} />
          </Stack>
          <AddToCart product={product} />
        </Grid>
      </Grid>
    );
  }

  return null; // TODO: Add skeleton
};
