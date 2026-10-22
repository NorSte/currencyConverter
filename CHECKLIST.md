# Checklist

Test the finished app as a user. The result line must show the values you entered, not hardcoded text:

```html
<b>{amount} {from}</b> is equal to <b>{converted} {to}</b>
```

The expected numbers below use the rates in `src/data/currency.js`.

## What to build

- [ ] Import `ALL_CURRENCIES` and `EXCHANGE_RATES` from `./data/currency.js`.
- [ ] Add state for `amount`, `from` and `to`.
- [ ] Make the amount input and both selects controlled.
- [ ] Fill both selects from `ALL_CURRENCIES` as `Name (CODE)`.
- [ ] Look up the rate with `EXCHANGE_RATES[from].conversion_rates[to]`.
- [ ] Show the result as `<b>{amount} {from}</b> is equal to <b>{converted} {to}</b>`.

## User test

- [ ] Open the app. Amount is `10`, "from" is USD, "to" is EUR. Result: **10 USD** is equal to **9.2 EUR**.
- [ ] Type `100` in Amount. Result: **100 USD** is equal to **92 EUR**.
- [ ] Type `1` in Amount. Result: **1 USD** is equal to **0.92 EUR**.
- [ ] Change "Convert into" to NOK, amount `100`. Result: **100 USD** is equal to **1070 NOK**.
- [ ] Change "Currency" to GBP, "Convert into" to USD, amount `50`. Result: **50 GBP** is equal to **63.3 USD**.
- [ ] Change "Currency" to EUR, "Convert into" to EUR, amount `7`. Result: **7 EUR** is equal to **7 EUR**.
- [ ] Type `0`. Result: **0 USD** is equal to **0 EUR**.
- [ ] Clear the amount field. The app does not crash.
- [ ] Both dropdowns list every currency in `ALL_CURRENCIES`.
- [ ] The browser console shows no errors or key warnings.
