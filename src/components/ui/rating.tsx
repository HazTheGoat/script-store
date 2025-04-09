import { Rating as RatingType } from "@/types";
import { Stack, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  rating: RatingType;
};
export const Rating = ({ rating }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.5}
      sx={{
        flexShrink: 0,
      }}
    >
      <StarIcon
        fontSize="small"
        sx={{
          fontSize: "1rem",
        }}
      />
      <Typography
        variant="body2"
        component="span"
        sx={{
          lineHeight: 1,
          fontSize: "0.875rem",
        }}
      >
        {rating.rate.toFixed(1)} ({rating.count})
      </Typography>
    </Stack>
  );
};
