const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "BDT",
});
const FormatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default FormatCurrency;
