"use client";

import { useGetProducts } from "@/hooks/api/use-get-products";
import { Grid, Stack } from "@mui/material";
import { ProductCard } from "./product-card";
import { CategoryFilter } from "../ui/category-filter";
import { SortSelect } from "../ui/sort-select";
import { useFilteredProducts } from "@/hooks/utils/use-filtered-products";

export function ProductListFeatureShell() {
  const { data: products, isLoading, error } = useGetProducts();
  const filteredProducts = useFilteredProducts(products);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Stack direction={"row"} spacing={2}>
          <CategoryFilter />
          <SortSelect />
        </Stack>
      </Grid>
      {filteredProducts?.map((item) => (
        <Grid
          key={item.id}
          size={{
            md: 4,
            xs: 6,
          }}
        >
          <ProductCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
