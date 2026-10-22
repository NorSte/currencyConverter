import { ALL_CURRENCIES, EXCHANGE_RATES } from "./data/currency.js"
import { useState } from "react"


export default function App() {

  const [from, setFrom ] = useState("USD");
  const [to, setTo ] = useState("EUR");
  const [amount, setAmount] = useState(10);

  const conversionRate = EXCHANGE_RATES[from].conversion_rates.EUR;

  console.log(amount);
  console.log(conversionRate);



  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Exchange Rates</h1>
      </header>
      <div className="conversion-card">
        <form className="conversion-form">
          <fieldset className="currency-fieldset">
            <legend className="fieldset-legend">Currency conversion</legend>
            <Input id="amount" label="Amount" placeholder="Amount" />
            <Select id="from" label="Currency" value />
            <Select id="to" label="Convert into" />
          </fieldset>
          <div data-testid="result" className="conversion-result">
            <b>{amount} {from}</b> is equal to <b>{amount * conversionRate} {to}</b>
          </div>
        </form>
      </div>
    </div>
  );
}

function Select({ id, label }) {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select id={id} data-testid={id} className="form-select">
        {ALL_CURRENCIES.map(c => {
          return <option key={c.code} >{`${c.name} (${c.code})`}</option>;
        })};
      </select>
    </>
  );
}

function Input({ id, label, placeholder, quantity,  }) {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="number"
        id={id}
        data-testid={id}
        placeholder={placeholder}
        className="form-input"
        
        value={}
        onChange
        onChange={id => e.target.id}
      />
    </>
  );
}
