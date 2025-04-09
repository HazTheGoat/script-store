import { ProductListFeatureShell } from "@/components/features/product-list";
import { Container, Skeleton } from "@mui/material";
import { Suspense } from "react";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Suspense fallback={<Skeleton />}>
        <ProductListFeatureShell />
      </Suspense>
    </Container>
  );
}

export function generateMetadata() {
  return {
    title: `Clothes, Jewelry, Shoes, and Accessories`,
    description: `Shop the latest trends in fashion, jewelry, shoes, and accessories. Discover unique styles and elevate your wardrobe with our curated collection.`,
  };
}
