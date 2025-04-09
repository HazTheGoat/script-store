import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Breakpoint } from "@mui/material/styles";

type Props = {
  imgUrl: string;
  alt: string;
  priority?: boolean;
  height: number | { [key in Breakpoint]?: number | string };
};
export const ProductImage = ({ imgUrl, alt, height }: Props) => {
  return (
    <Box
      className="image-container"
      sx={{
        position: "relative",
        height,
        transition: "background-color 0.3s",
      }}
    >
      <Image
        src={imgUrl}
        alt={alt}
        fill
        priority
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Box>
  );
};
