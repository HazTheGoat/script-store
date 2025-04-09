export const formatCurrency = (price: number) => {
  return new Intl.NumberFormat("no-NO", {
    style: "currency",
    currency: "NOK",
  }).format(price);
};
