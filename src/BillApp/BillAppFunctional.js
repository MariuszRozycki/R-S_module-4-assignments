import React, { useState } from "react";

const styles = {
  display: 'block',
  margin: '10px auto'
}


function BillAppFunctional({ clicked, vat }) {
  const [amount, setAmount] = useState(' ');
  const [tipValue, setTipValue] = useState(' ');
  const [valueClicked, setValueClicked] = useState(clicked);
  const [sumWithVat, setSumWithVat] = useState('');

  const handleAmount = (event) => {
    setAmount(parseFloat(event.target.value));
  }

  const handleTipValue = (event) => {
    setTipValue(parseFloat(event.target.value));
  }

  const sumVatAndTip = parseFloat(sumWithVat) + ((parseFloat(sumWithVat) * parseFloat(tipValue) / 100));

  const handleCountAmount = () => {
    setSumWithVat(amount + (amount * vat / 100));
    setValueClicked(!valueClicked);
  }

  if (!valueClicked) {
    return (
      <div>
        <h1>
          BillAppClassFunctional
        </h1>
        <p>Amount to pay without tip: {sumWithVat} euro to pay</p>
        <p>Amount to pay with tip: {sumVatAndTip} euro to pay</p>
      </div>
    )
  }

  return (
    <div>
      <h1>
        BillAppFunctional
      </h1>
      <form>
        <input style={styles} placeholder='Enter amount' type="number" onChange={handleAmount} />
        <select style={styles} name="tip" id="tip" onChange={handleTipValue}>
          <option>Choose tip value</option>
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
        </select>
        <button type='button' onClick={handleCountAmount}>Count amount</button>
      </form>
    </div>
  )
}

export default BillAppFunctional;