import { SortOption } from "@/store/slices/sort-slice";
import { useGlobalStore } from "@/store/use-store";
import { Select, MenuItem, Box, Typography } from "@mui/material";

export const SortSelect = () => {
  const { sortBy, setSortBy } = useGlobalStore();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography sx={{ mr: 1 }}>Sort by</Typography>
      <Select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortOption)}
        sx={{ width: 200 }}
      >
        <MenuItem value="default">Standard</MenuItem>
        <MenuItem value="priceAsc">Pris: Lav til Høy</MenuItem>
        <MenuItem value="priceDesc">Pris: Høy til Lav</MenuItem>
      </Select>
    </Box>
  );
};
