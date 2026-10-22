import { useState } from 'react'
import './App.css'

const exchangeRates = {
  EUR: { id: 1, USD: 1.155, EUR: 1, GBP: 0.856, JPY: 179.11, CAD: 1.607 },
  GBP: { id: 2, USD: 1.348, EUR: 1.168, GBP: 1, JPY: 209.04, CAD: 1.876 },
  JPY: { id: 3, USD: 0.0064, EUR: 0.0056, GBP: 0.0048, JPY: 1, CAD: 0.0090 },
  CAD: { id: 4, USD: 0.718, EUR: 0.622, GBP: 0.533, JPY: 111.42, CAD: 1 }
};

function App() {
  const [ quantity, setQuantity ] = useState(10);
  const [ selectedFrom, setSelectedFrom ] = useState("GBP");
  const [ selectedTo, setSelectedTo ] = useState("EUR");
  const [convertedMessage, setConvertedMessage] = useState(null);

  const currencyRatios = Object.keys(exchangeRates);
  const currencies = currencyRatios;


  function handleConvert() {
    // Sjekk beste praksis
    const qty = Number(quantity);

    if(Number.isNaN(qty)){return;}

    const amount = qty * exchangeRates[selectedFrom][selectedTo];

    setConvertedMessage(`${qty} ${selectedFrom} = ${amount.toFixed(2)} ${selectedTo}`);
  }

  function handleSwitch() {
    setSelectedFrom(selectedTo);
    setSelectedTo(selectedFrom)
  }

  return (
    <div>
      <title>Nore Stene </title>
      <>
        <h1>Currency Converter</h1>
      </>
      <div className='container'>
        <div className='left'>
          <input 
            placeholder='Quantity'
            value={quantity}
            onChange={value => {setQuantity(value.target.value)}} />
        </div>
        <div className='middle'>
          <select
          value={selectedFrom}
          onChange={value => {setSelectedFrom(value.target.value)}} >
            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className='switch' onClick={handleSwitch}></div>
        <div className='right'>
          <select
            value={selectedTo}
            onChange={value => {setSelectedTo(value.target.value)}} >
            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <hr />
      <>
      <button onClick={handleConvert} >Convert</button>
      </>
      <h4>Converted Amount</h4>
      {convertedMessage && <p>{convertedMessage}</p>}
    </div>
  )
}

export default App
