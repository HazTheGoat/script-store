import { Product } from "@/types/product";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Rating } from "../ui/rating";
import { Price } from "../ui/price";
import { ProductImage } from "../ui/product-image";

type Props = {
  item: Product;
};
export const ProductCard = ({ item }: Props) => {
  const handleMouseOver = async () => {
    /*
     *
     * We can use this to prefetch data when the user hovers over the card, 
     * This is useful for improving performance and user experience, 
     * by preloading data that the user is likely to navigate to, 
     * This is a good place to prefetch data for the product details page, 
     * Uncomment the following line to enable prefetching
     * 
     * 
     
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery({
        queryKey: [USE_GET_PRODUCT, { id: item.id }],
        queryFn: () => getProductById({ id: item.id }),
        });
    */
  };

  return (
    <Link href={`/product/${item.id}`} passHref legacyBehavior>
      <Card
        onMouseEnter={handleMouseOver}
        variant="outlined"
        sx={{
          position: "relative",

          cursor: "pointer",
          transition: "box-shadow 0.3s",
          "&:hover": {
            "& .quick-view": {
              opacity: 1,
            },
            "& .image-container": {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
          },
        }}
      >
        <ProductImage
          alt={item.title}
          imgUrl={item.image}
          height={{
            xs: 200,
            sm: 250,
            md: 400,
          }}
        />

        <CardContent sx={{ pt: 2 }}>
          {/* Title */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
          >
            {/* Title */}
            <Typography
              variant="body1"
              component="p"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                flex: 1,
              }}
            >
              {item.title}
            </Typography>

            {/* Rating */}
            <Rating rating={item.rating} />
          </Stack>

          {/* Category */}
          <Typography
            variant="body2"
            component="p"
            color="text.secondary"
            sx={{ textTransform: "uppercase", mt: 0.5 }}
          >
            {item.category}
          </Typography>

          {/* Price */}
          <Price price={item.price} variant="h6" />
        </CardContent>
      </Card>
    </Link>
  );
};
