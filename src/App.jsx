export default function App() {
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
            <b>1 EUR</b> is equal to <b>1 EUR</b>
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
        Select
      </select>
    </>
  );
}

function Input({ id, label, placeholder }) {
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
      />
    </>
  );
}
