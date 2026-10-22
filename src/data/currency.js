export const ALL_CURRENCIES = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "JPY", name: "Japanese Yen" },
];

export const EXCHANGE_RATES = {
  USD: {
    base_code: "USD",
    conversion_rates: { USD: 1, EUR: 0.92, GBP: 0.79, NOK: 10.7, JPY: 149.5 },
  },
  EUR: {
    base_code: "EUR",
    conversion_rates: { USD: 1.087, EUR: 1, GBP: 0.86, NOK: 11.63, JPY: 162.5 },
  },
  GBP: {
    base_code: "GBP",
    conversion_rates: { USD: 1.266, EUR: 1.163, GBP: 1, NOK: 13.54, JPY: 189.2 },
  },
  NOK: {
    base_code: "NOK",
    conversion_rates: { USD: 0.0935, EUR: 0.086, GBP: 0.0738, NOK: 1, JPY: 13.97 },
  },
  JPY: {
    base_code: "JPY",
    conversion_rates: { USD: 0.0067, EUR: 0.0062, GBP: 0.0053, NOK: 0.0716, JPY: 1 },
  },
};
