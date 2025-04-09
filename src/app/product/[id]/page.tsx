import { ProductDetails } from "@/components/features/product-details";
import { HydrationBoundary } from "@tanstack/react-query";
import { Container } from "@mui/material";

import React from "react";
import { getProductById } from "@/services/get-product-by-id";

interface PageProps {
  params: {
    id: number;
  };
}

/**
 * ProductPage component that fetches and displays product details.
 * It uses React Query for to prefetch.
 * It also sets up a hydration boundary for server-side rendering.
 */
export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <HydrationBoundary>
      <Container maxWidth="xl">
        <ProductDetails id={id} />
      </Container>
    </HydrationBoundary>
  );
}

/**
 * Using the `generateMetadata` function to set metadata for a specific page.
 */
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById({ id });

  return {
    title: `${product.title}`,
    description: `${product.description}`,
    openGraph: {
      title: `${product.title}`,
      description: `${product.description}`,
      type: "website",
      locale: "no_NO",
      url: "htts://script-store.com",
      images: [
        {
          url: `${product.image}`,
          width: 800,
          height: 600,
          alt: `${product.title}`,
        },
      ],
    },
  };
}
