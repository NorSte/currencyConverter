# Currency Converter

Exam coding challenge: a small React + Vite app that converts an amount between currencies.

## Task

Complete the currency converter in `src/App.jsx` using the data in `src/data/currency.js`:

- `ALL_CURRENCIES`: list of `{ code, name }` used to fill the currency dropdowns.
- `EXCHANGE_RATES`: rates keyed by base currency, read as `EXCHANGE_RATES[from].conversion_rates[to]`.

#### Requirements

1. Amount input (`data-testid="amount"`) accepts a number.
2. "Currency" select (`data-testid="from"`) lists all currencies as `Name (CODE)`.
3. "Convert into" select (`data-testid="to"`) lists all currencies in the same format.
4. Defaults: amount `10`, from `USD`, to `EUR`.
5. Result (`data-testid="result"`) reads `<amount> <from>` is equal to `<converted> <to>`.
6. The result updates whenever amount, from or to changes.
7. Converting a currency into itself gives the same amount.

### Hints

- Keep `amount`, `from` and `to` in state with `useState`.
- Make the inputs controlled: set `value` and `onChange`.
- Use `key={c.code}` when rendering options.
- Round the converted amount to 2 decimals for display.

## Getting started

```
npm install
npm run dev
```

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Production build             |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Lint with Oxlint             |

## Project structure

```
src/
  App.jsx            Converter component, Input and Select
  data/currency.js   Currency list and exchange rates
  index.css          Styles
  main.jsx           Entry point
```

## Stack

React 19, Vite, Oxlint.
