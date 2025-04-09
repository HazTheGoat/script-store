import { useGlobalStore } from "@/store/";
import { Category } from "@/types";
import { MenuItem, Select, Stack, Typography } from "@mui/material";

export const CategoryFilter = () => {
  const { selectedCategory, setCategory } = useGlobalStore();

  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Typography sx={{ mr: 1 }}>Filter by</Typography>
      <Select
        size="small"
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value as Category | "all")}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value={Category.MensClothing}>{"Men's Clothing"}</MenuItem>
        <MenuItem value={Category.WomensClothing}>
          {"Women's Clothing"}
        </MenuItem>
        <MenuItem value={Category.Electronics}>Electronics</MenuItem>
        <MenuItem value={Category.Jewelery}>Jewelery</MenuItem>
      </Select>
    </Stack>
  );
};
